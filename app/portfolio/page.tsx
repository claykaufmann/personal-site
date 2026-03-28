import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPortfolios } from "@/lib/handlePortfolio";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio | Clay Kaufmann",
  description: "Photography portfolios by Clay Kaufmann",
};

export default async function PortfolioPage() {
  const portfolios = await getAllPortfolios();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Portfolio
        </h1>
        <p className="mt-4 text-muted-foreground">
          A collection of my photography work.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.slug}
              href={`/portfolio/${portfolio.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <Image
                src={portfolio.headerImage.url}
                alt={portfolio.title}
                width={portfolio.headerImage.width}
                height={portfolio.headerImage.height}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-lg font-semibold text-white">
                  {portfolio.title}
                </h2>
                <p className="mt-1 text-sm text-white/80 line-clamp-2">
                  {portfolio.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
