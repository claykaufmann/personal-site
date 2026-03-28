import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Clay Kaufmann",
  description:
    "Software engineer and landscape photographer with a Master's in Computer Science from the University of Vermont.",
};

export default function AboutPage() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a software engineer with a Master&apos;s in Computer Science from the
            University of Vermont. I work across the stack with Python, TypeScript,
            and JavaScript, building with frameworks like Next.js, React, Node.js,
            and Django.
          </p>
          <p>
            I&apos;ve built citizen science tools at NASA Goddard Space Flight Center,
            automated platform migrations at Harris Computer, and taught programming
            at UVM. I enjoy tackling problems that sit at the intersection of
            engineering and real-world impact.
          </p>

          <h2 className="!mt-12 text-2xl font-bold tracking-tight text-foreground">
            Photography
          </h2>
          <p>
            Outside of software, I&apos;m an avid landscape and nature photographer.
            I spend much of my free time chasing light in mountains, national parks,
            and wild coastlines. Photography is how I slow down and engage with the
            world at a different pace — it&apos;s equal parts patience, preparation,
            and luck.
          </p>
          <p>
            My work leans toward big, dramatic landscapes and quieter detail shots
            that reward a second look. I shoot primarily with natural light and aim
            for images that feel honest to the scene.
          </p>
          <p>
            You can browse my portfolios on the{" "}
            <a
              href="/photography"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
            >
              photography page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
