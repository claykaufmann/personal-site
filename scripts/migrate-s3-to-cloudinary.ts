/**
 * One-time migration script: upload all photos from S3 bucket-tupslv to Cloudinary,
 * preserving the portfolio/<slug>/ folder structure.
 *
 * Prerequisites:
 *   npm install @aws-sdk/client-s3   (temporary — remove after migration)
 *
 * Usage:
 *   npx tsx scripts/migrate-s3-to-cloudinary.ts
 *
 * Required environment variables:
 *   AWS_BUCKET_REGION    - S3 bucket region (e.g. us-east-2)
 *   BUCKET_NAME          - S3 bucket name (e.g. bucket-tupslv)
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */

import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { v2 as cloudinary } from 'cloudinary'

// ── Config ──────────────────────────────────────────────────────────

const bucketRegion = process.env.AWS_BUCKET_REGION
const bucketName = process.env.BUCKET_NAME

if (!bucketRegion || !bucketName) {
  console.error('Missing AWS_BUCKET_REGION or BUCKET_NAME env vars')
  process.exit(1)
}

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  console.error('Missing CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, or CLOUDINARY_API_SECRET')
  process.exit(1)
}

const s3 = new S3Client({ region: bucketRegion })
const bucketURL = `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/`

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// ── Helpers ─────────────────────────────────────────────────────────

async function listAllS3Keys(prefix: string): Promise<string[]> {
  const keys: string[] = []
  let continuationToken: string | undefined

  do {
    const response = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucketName,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      })
    )

    for (const obj of response.Contents ?? []) {
      if (obj.Key) keys.push(obj.Key)
    }

    continuationToken = response.NextContinuationToken
  } while (continuationToken)

  return keys
}

async function uploadToCloudinary(s3Key: string): Promise<void> {
  const url = bucketURL + s3Key

  // Derive public_id: strip file extension, keep folder structure
  // e.g. "portfolio/main/sunset-beach.jpg" → "portfolio/main/sunset-beach"
  const publicId = s3Key.replace(/\.[^.]+$/, '')

  try {
    await cloudinary.uploader.upload(url, {
      public_id: publicId,
      resource_type: 'image',
      overwrite: false,
      unique_filename: false,
      use_filename: true,
    })
    console.log(`  ✓ ${s3Key}`)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`  ✗ ${s3Key}: ${message}`)
  }
}

// ── Main ────────────────────────────────────────────────────────────

async function main() {
  console.log(`Listing objects in s3://${bucketName}/portfolio/ ...`)
  const keys = await listAllS3Keys('portfolio/')

  // Filter to image files only
  const imageKeys = keys.filter((k) =>
    /\.(jpg|jpeg|png|webp|gif|tiff)$/i.test(k)
  )

  console.log(`Found ${imageKeys.length} images to migrate.\n`)

  // Upload sequentially to avoid rate limits
  let success = 0
  let failed = 0

  for (const key of imageKeys) {
    try {
      await uploadToCloudinary(key)
      success++
    } catch {
      failed++
    }
  }

  console.log(`\nMigration complete: ${success} uploaded, ${failed} failed.`)
}

main()
