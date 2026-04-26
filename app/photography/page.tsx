import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPortfolioMeta } from "@/lib/handlePortfolio";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Photography | Clay Kaufmann",
  description: "Photography portfolios by Clay Kaufmann",
};

export default async function PortfolioPage() {
  const portfolios = await getAllPortfolioMeta();

  const entries = [
    ...portfolios.map((p) => ({
      href: `/photography/${p.slug}`,
      title: p.title,
      description: p.description,
    })),
    {
      href: "/photography/film",
      title: "Film",
      description: "A running log of film rolls.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lowercase">
          Photography
        </h1>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {entries.map((entry) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-muted/40 -mx-6 px-6"
              >
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold tracking-tight lowercase sm:text-3xl">
                    {entry.title}
                  </h2>
                  {entry.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
