import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import type {
  FilmRollFrontmatter,
  FilmRollSummary,
  FilmIndexIntro,
  Photo,
} from '@/types/types'
import { imageUrl } from './cloudinary'

const filmDir = join(process.cwd(), 'film')

const isRollFile = (name: string) =>
  name.endsWith('.md') && !name.startsWith('_')

const readRoll = (
  slug: string
): { data: FilmRollFrontmatter; content: string } | null => {
  const path = join(filmDir, `${slug}.md`)
  let raw: string
  try {
    raw = fs.readFileSync(path, 'utf8')
  } catch {
    return null
  }
  const parsed = matter(raw)
  return {
    data: parsed.data as FilmRollFrontmatter,
    content: parsed.content,
  }
}

const normalizeDate = (value: unknown): string | undefined => {
  if (!value) return undefined
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value)
}

const coverPhoto = (publicId?: string): Photo | null => {
  if (!publicId) return null
  return {
    url: imageUrl(publicId, { width: 1600, crop: 'fill' }),
    width: 1600,
    height: 1067,
  }
}

export const getFilmRollSlugs = (): string[] => {
  if (!fs.existsSync(filmDir)) return []
  return fs
    .readdirSync(filmDir)
    .filter(isRollFile)
    .map((name) => name.replace(/\.md$/, ''))
}

export const getAllFilmRolls = (): FilmRollSummary[] => {
  const rolls = getFilmRollSlugs()
    .map((slug): FilmRollSummary | null => {
      const roll = readRoll(slug)
      if (!roll) return null
      return {
        slug,
        title: roll.data.title ?? slug,
        date: normalizeDate(roll.data.date),
        camera: roll.data.camera,
        stock: roll.data.stock,
        location: roll.data.location,
        coverImage: coverPhoto(roll.data.cover),
      }
    })
    .filter((r): r is FilmRollSummary => r !== null)

  return rolls.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return b.date.localeCompare(a.date)
  })
}

export const getFilmIndexIntro = (): FilmIndexIntro => {
  const path = join(filmDir, '_intro.md')
  try {
    const raw = fs.readFileSync(path, 'utf8')
    const parsed = matter(raw)
    return {
      title: (parsed.data.title as string) ?? 'Film',
      body: parsed.content.trim(),
    }
  } catch {
    return { title: 'Film', body: '' }
  }
}
