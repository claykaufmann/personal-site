import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getAllFilmRolls, getFilmIndexIntro } from "@/lib/handleFilmRoll";
import type { FilmRollSummary } from "@/types/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Film | Clay Kaufmann",
  description: "A running log of film rolls — one roll at a time.",
};

const formatDate = (date?: string) => {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

const subtitle = (roll: FilmRollSummary) =>
  [roll.camera, roll.stock].filter(Boolean).join(" · ");

export default async function FilmIndexPage() {
  const intro = getFilmIndexIntro();
  const rolls = getAllFilmRolls();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/photography"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Photography
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lowercase">
          {intro.title}
        </h1>

        {intro.body && (
          <div className="mt-4 max-w-2xl prose prose-neutral dark:prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed">
            <ReactMarkdown>{intro.body}</ReactMarkdown>
          </div>
        )}

        {rolls.length === 0 ? (
          <p className="mt-12 text-muted-foreground">No film rolls yet.</p>
        ) : (
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {rolls.map((roll) => {
              const date = formatDate(roll.date);
              const sub = subtitle(roll);
              return (
                <li key={roll.slug}>
                  <Link
                    href={`/photography/film/${roll.slug}`}
                    className="group flex items-center gap-5 py-5 -mx-6 px-6 transition-colors hover:bg-muted/40"
                  >
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-muted sm:size-24">
                      {roll.coverImage ? (
                        <Image
                          src={roll.coverImage.url}
                          alt={roll.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 80px, 96px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold tracking-tight lowercase sm:text-xl">
                        {roll.title}
                      </h2>
                      {sub && (
                        <p className="mt-0.5 text-sm text-muted-foreground lowercase">
                          {sub}
                        </p>
                      )}
                      {roll.location && (
                        <p className="text-sm text-muted-foreground lowercase">
                          {roll.location}
                        </p>
                      )}
                    </div>

                    {date && (
                      <span className="hidden shrink-0 text-sm text-muted-foreground sm:block lowercase">
                        {date}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
