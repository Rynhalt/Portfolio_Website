import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ExperienceDetailView from "@/components/ExperienceDetailView";
import { experiences } from "@/data/experience";

interface ExperienceParams {
  id: string;
}

export function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

export function generateMetadata({
  params,
}: {
  params: ExperienceParams;
}): Metadata {
  const experience = experiences.find((item) => item.id === params.id);

  if (!experience) {
    return {
      title: "Experience not found — Rynhalt Portfolio",
      description: "This experience page is not available.",
    };
  }

  return {
    title: `${experience.title} — Rynhalt Experience Brief`,
    description: experience.summary,
  };
}

export default function ExperienceDetail({
  params,
}: {
  params: ExperienceParams;
}) {
  const experience = experiences.find((item) => item.id === params.id);

  if (!experience) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <ExperienceDetailView experience={experience} />
      <SiteFooter />
    </div>
  );
}
