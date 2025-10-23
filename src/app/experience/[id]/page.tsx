import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ExperienceDetailView from "@/components/ExperienceDetailView";
import { experiences } from "@/data/experience";

interface ExperienceParams {
  id: string;
}

const resolveParams = (params: Promise<ExperienceParams> | ExperienceParams) =>
  typeof (params as Promise<ExperienceParams>).then === "function"
    ? (params as Promise<ExperienceParams>)
    : Promise.resolve(params as ExperienceParams);

export function generateStaticParams() {
  return experiences.map((experience) => ({ id: experience.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ExperienceParams> | ExperienceParams;
}): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const experience = experiences.find((item) => item.id === resolvedParams.id);

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

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<ExperienceParams> | ExperienceParams;
}) {
  const resolvedParams = await resolveParams(params);
  const experience = experiences.find((item) => item.id === resolvedParams.id);

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
