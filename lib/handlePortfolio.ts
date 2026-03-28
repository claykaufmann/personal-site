import {
  PortfolioInfo,
  Photo,
  PortfolioThumbnail,
  JSONPortfolioInfo,
} from '@/types/types'
import {
  listPortfolioFolders,
  listPortfolioImages,
  getPortfolioHeader,
  imageUrl,
  CloudinaryResource,
} from './cloudinary'
import fs from 'fs'
import { join } from 'path'

const portfolioDirec = join(process.cwd(), 'portfolios')

function resourceToPhoto(resource: CloudinaryResource): Photo {
  const filename = resource.public_id.split('/').pop() ?? ''
  const alt = filename.replace(/[-_]/g, ' ')

  return {
    url: imageUrl(resource.public_id, { width: 1600, crop: 'scale' }),
    width: resource.width,
    height: resource.height,
    alt,
  }
}

export const getPortfolioSlugs = async (): Promise<string[]> => {
  return listPortfolioFolders()
}

export const getPortfolioBySlug = async (
  slug: string
): Promise<PortfolioInfo> => {
  const photos = await getPhotosFromPortfolio(slug)
  const portfolioInfo = await getPortfolioInformation(slug)

  return {
    title: portfolioInfo.title,
    slug: slug,
    photos: photos,
    description: portfolioInfo.description,
  }
}

export const getPhotosFromPortfolio = async (
  slug: string
): Promise<Photo[]> => {
  const resources = await listPortfolioImages(slug)
  return resources.map(resourceToPhoto)
}

export const getPortfolioHeaderImage = async (slug: string): Promise<Photo> => {
  const header = await getPortfolioHeader(slug)

  if (header) {
    return resourceToPhoto(header)
  }

  // Fall back to a random landscape photo from the portfolio
  const photos = await getPhotosFromPortfolio(slug)

  let index = Math.floor(Math.random() * photos.length)
  let img = photos[index]

  while (img.height > img.width) {
    index = Math.floor(Math.random() * photos.length)
    img = photos[index]
  }

  return {
    url: img.url,
    width: img.width,
    height: img.height,
  }
}

export const getAllPortfolios = async (): Promise<PortfolioThumbnail[]> => {
  const slugs = await getPortfolioSlugs()

  const portfolios: PortfolioThumbnail[] = await Promise.all(
    slugs.map(async (slug) => {
      const img = await getPortfolioHeaderImage(slug)
      const portfolioInfo = await getPortfolioInformation(slug)

      const portfolio: PortfolioThumbnail = {
        slug: slug,
        title: portfolioInfo.title,
        headerImage: img,
        description: portfolioInfo.description,
      }

      return portfolio
    })
  )

  for (let i = 0; i < portfolios.length; i++) {
    if (portfolios[i].title === 'Main') {
      const temp = portfolios[0]
      portfolios[0] = portfolios[i]
      portfolios[i] = temp
    }
  }

  return portfolios
}

export const getPortfolioInformation = async (
  slug: string
): Promise<JSONPortfolioInfo> => {
  const path = join(portfolioDirec, `${slug}.json`)

  let contents = ''

  try {
    contents = fs.readFileSync(path, 'utf8')
  } catch (e) {
    return {
      title: 'Unknown',
      description: 'unknown',
    }
  }

  const data = JSON.parse(contents)

  return {
    title: data.title,
    description: data.description,
  }
}
