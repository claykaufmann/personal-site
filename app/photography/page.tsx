import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPortfolios } from "@/lib/handlePortfolio";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Photography | Clay Kaufmann",
  description: "Photography portfolios by Clay Kaufmann",
};

export default async function PortfolioPage() {
  const portfolios = await getAllPortfolios();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lowercase">
          Photography
        </h1>

        <div className="mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4 scrollbar-none">
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.slug}
              href={`/photography/${portfolio.slug}`}
              className="group relative flex-none w-[82vw] sm:w-[60vw] lg:w-[44vw] h-[60vh] sm:h-[70vh] overflow-hidden rounded-lg snap-start"
            >
              <Image
                src={portfolio.headerImage.url}
                alt={portfolio.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-xl font-semibold text-white lowercase">
                  {portfolio.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
