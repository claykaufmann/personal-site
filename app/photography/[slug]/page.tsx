import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getPortfolioBySlug } from "@/lib/handlePortfolio";
import { PortfolioGallery } from "@/components/portfolio-gallery";

export const revalidate = 3600;

type Params = { slug: string };

export async function generateStaticParams() {
  if (!process.env.CLOUDINARY_CLOUD_NAME) return [];
  const { getPortfolioSlugs } = await import("@/lib/handlePortfolio");
  const slugs = await getPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) return {};

  return {
    title: `${portfolio.title} | Clay Kaufmann`,
    description: portfolio.description,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) notFound();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/photography"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Photography
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          {portfolio.title}
        </h1>

        {portfolio.description && (
          <p className="mt-3 text-muted-foreground">{portfolio.description}</p>
        )}

        <div className="mt-10">
          <PortfolioGallery photos={portfolio.photos} />
        </div>
      </div>
    </section>
  );
}
