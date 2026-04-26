export interface PortfolioInfo {
  slug: string
  title: string
  photos: Photo[]
  description?: string
}

export interface PortfolioThumbnail {
  slug: string
  title: string
  headerImage: Photo
  description: string
}

export interface Photo {
  url: string
  width: number
  height: number
  alt?: string
  name?: string
}

export interface JSONPortfolioInfo {
  title: string
  description: string
}

export interface FilmRollFrontmatter {
  title: string
  date?: string
  camera?: string
  stock?: string
  location?: string
  cover?: string
  folder?: string
}

export interface FilmRollSummary {
  slug: string
  title: string
  date?: string
  camera?: string
  stock?: string
  location?: string
  coverImage: Photo | null
}

export interface FilmIndexIntro {
  title: string
  body: string
}
