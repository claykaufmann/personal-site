import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Camera,
  ArrowRight,
} from "lucide-react";
import { getFeaturedImages, imageUrl } from "@/lib/cloudinary";

export const revalidate = 3600;

const experience = [
  {
    role: "Software Engineering Intern",
    company: "NASA Goddard Space Flight Center",
    location: "Remote",
    dates: "Aug 2021 – Dec 2021",
    description:
      "Led development of the GRASP citizen science project — an interactive web application enabling users to generate telescope placement patterns for deep-space imaging research.",
  },
  {
    role: "Student Software Engineer",
    company: "Harris Computer / Systems and Software",
    location: "Remote",
    dates: "May 2021 – Aug 2021",
    description:
      "Built automated migration tooling to transition customers to the next-generation platform for enQuesta, the company's core product.",
  },
  {
    role: "Teaching Assistant — Intermediate Programming (CS 110)",
    company: "University of Vermont",
    location: "Burlington, VT",
    dates: "Jan 2020 – May 2021",
    description:
      "Taught Object-Oriented Programming and Java fundamentals. Ran weekly office hours helping students with coursework and exam preparation.",
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Vermont",
    location: "Burlington, VT",
    dates: "Graduated Dec 2022",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Vermont",
    location: "Burlington, VT",
    dates: "Graduated Dec 2021",
    detail: "Minor: Mathematics",
  },
];

export default async function Home() {
  const featured = await getFeaturedImages();

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <Image
          src="/images/me_tetons_large.jpg"
          alt="Clay Kaufmann in the Tetons"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center text-white">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Clay Kaufmann
          </h1>
          <p className="max-w-md text-lg text-white/90 sm:text-xl">
            Software Engineer &amp; Photographer
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
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
            <p>
              Outside of software, I&apos;m an avid landscape and nature photographer.{" "}
              <Link
                href="/about"
                className="text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section
        id="photography"
        className="scroll-mt-16 bg-muted/40 py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Photography
            </h2>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Camera className="size-4" />
              View Portfolio
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featured.map((photo) => (
              <Link
                key={photo.public_id}
                href="/portfolio"
                className="group relative aspect-[3/2] overflow-hidden rounded-lg"
              >
                <Image
                  src={imageUrl(photo.public_id, { width: 800, height: 533, crop: "fill" })}
                  alt={photo.public_id.split("/").pop()?.replace(/[-_]/g, " ") ?? "Featured photograph"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-16 bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <div className="mt-10 space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.dates}`}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 hidden sm:block">
                    <Briefcase className="size-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.company} &middot; {job.location}
                    </p>
                    <p className="text-sm text-muted-foreground">{job.dates}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="mt-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>
          <div className="mt-10 space-y-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 hidden sm:block">
                    <GraduationCap className="size-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.school} &middot; {edu.location}
                    </p>
                    <p className="text-sm text-muted-foreground">{edu.dates}</p>
                    {edu.detail && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
