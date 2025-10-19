import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import ProjectDetailView from "@/components/ProjectDetailView";
import { projects } from "@/data/projects";

interface ProjectParams {
  id: string;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({
  params,
}: {
  params: ProjectParams;
}): Metadata {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return {
      title: "Quest not found — Rynhalt Portfolio",
      description: "This quest scroll has yet to be written.",
    };
  }

  return {
    title: `${project.title} — Rynhalt Portfolio`,
    description: project.summary,
  };
}

export default function ProjectDetail({
  params,
}: {
  params: ProjectParams;
}) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <ProjectDetailView project={project} />
      <SiteFooter />
    </div>
  );
}
