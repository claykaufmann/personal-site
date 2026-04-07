import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export { cloudinary }

export interface CloudinaryResource {
  public_id: string
  width: number
  height: number
  format: string
  secure_url: string
}

/**
 * List all top-level portfolio folders (main, black-white, natl-parks, etc.).
 */
export async function listPortfolioFolders(): Promise<string[]> {
  if (!process.env.CLOUDINARY_CLOUD_NAME) return []
  const result = await cloudinary.api.root_folders()
  const portfolioFolders = ['best', 'black-white', 'natl-parks']
  return result.folders
    .map((f: { name: string }) => f.name)
    .filter((name: string) => portfolioFolders.includes(name))
}

/**
 * List all images in a portfolio folder, excluding the header image.
 */
export async function listPortfolioImages(
  slug: string
): Promise<CloudinaryResource[]> {
  const result = await cloudinary.search
    .expression(`folder:${slug} AND resource_type:image`)
    .sort_by('public_id', 'asc')
    .max_results(500)
    .execute()

  return (result.resources as CloudinaryResource[]).filter(
    (r) => !r.public_id.endsWith('/header')
  )
}

/**
 * Get the header image for a portfolio, or null if none exists.
 */
export async function getPortfolioHeader(
  slug: string
): Promise<CloudinaryResource | null> {
  try {
    const result = await cloudinary.api.resource(`${slug}/header`, {
      resource_type: 'image',
    })
    return result as unknown as CloudinaryResource
  } catch {
    return null
  }
}

/**
 * Generate an optimized Cloudinary URL with optional transforms.
 * Uses direct URL construction to avoid SDK sdk_semver issues.
 */
export function imageUrl(
  publicId: string,
  options: {
    width?: number
    height?: number
    crop?: string
    quality?: string | number
    format?: string
  } = {}
): string {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const transforms: string[] = []

  if (options.width) transforms.push(`w_${options.width}`)
  if (options.height) transforms.push(`h_${options.height}`)
  transforms.push(`c_${options.crop ?? 'fill'}`)
  transforms.push(`q_${options.quality ?? 'auto'}`)
  transforms.push(`f_${options.format ?? 'auto'}`)

  const transformStr = transforms.join(',')
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformStr}/${publicId}`
}

/**
 * Generate a thumbnail URL (400px wide, auto height).
 */
export function thumbnailUrl(publicId: string): string {
  return imageUrl(publicId, { width: 400, crop: 'scale' })
}

/**
 * Generate a lightbox-sized URL (1600px wide, auto height).
 */
export function lightboxUrl(publicId: string): string {
  return imageUrl(publicId, { width: 1600, crop: 'scale' })
}

/**
 * Generate a hero preview URL (1200x600, cropped to fill).
 */
export function heroUrl(publicId: string): string {
  return imageUrl(publicId, { width: 1200, height: 600, crop: 'fill' })
}

/**
 * Get featured images across portfolios for the homepage preview.
 * Returns one header/featured image per portfolio folder.
 */
export async function getFeaturedImages(): Promise<CloudinaryResource[]> {
  if (!process.env.CLOUDINARY_CLOUD_NAME) return []

  const folders = await listPortfolioFolders()

  const images = await Promise.all(
    folders.map(async (slug) => {
      const header = await getPortfolioHeader(slug)
      if (header) return header

      // Fall back to the first landscape image
      const result = await cloudinary.search
        .expression(`folder:${slug} AND resource_type:image`)
        .sort_by('public_id', 'asc')
        .max_results(10)
        .execute()

      const landscape = (result.resources as CloudinaryResource[]).find(
        (r) => !r.public_id.endsWith('/header') && r.width > r.height
      )
      return landscape ?? (result.resources as CloudinaryResource[])[0] ?? null
    })
  )

  return images.filter((img): img is CloudinaryResource => img !== null)
}
