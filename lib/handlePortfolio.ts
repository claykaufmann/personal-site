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

export const getPortfolioHeaderImage = async (slug: string): Promise<Photo | null> => {
  const header = await getPortfolioHeader(slug)

  if (header) {
    return resourceToPhoto(header)
  }

  // Fall back to a random landscape photo from the portfolio
  const photos = await getPhotosFromPortfolio(slug)

  if (photos.length === 0) {
    return null
  }

  // Try to find a landscape photo
  const landscapes = photos.filter((p) => p.width > p.height)
  const img = landscapes.length > 0
    ? landscapes[Math.floor(Math.random() * landscapes.length)]
    : photos[0]

  return {
    url: img.url,
    width: img.width,
    height: img.height,
  }
}

export const getAllPortfolioMeta = async (): Promise<
  Array<{ slug: string; title: string; description: string }>
> => {
  const slugs = await getPortfolioSlugs()

  const metas = await Promise.all(
    slugs.map(async (slug) => {
      const info = await getPortfolioInformation(slug)
      return { slug, title: info.title, description: info.description }
    })
  )

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].title === 'Best') {
      const tmp = metas[0]
      metas[0] = metas[i]
      metas[i] = tmp
      break
    }
  }

  return metas
}

export const getAllPortfolios = async (): Promise<PortfolioThumbnail[]> => {
  const slugs = await getPortfolioSlugs()

  const results = await Promise.all(
    slugs.map(async (slug) => {
      const img = await getPortfolioHeaderImage(slug)
      if (!img) return null // skip empty portfolios

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

  const portfolios = results.filter((p): p is PortfolioThumbnail => p !== null)

  for (let i = 0; i < portfolios.length; i++) {
    if (portfolios[i].title === 'Best') {
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
