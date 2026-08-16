import { createFileRoute } from "@tanstack/react-router";

import {
  Contact,
  EducationTraining,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "@/components/portfolio/sections";
import { AiTerminal } from "@/components/portfolio/terminal";

const TITLE = "Rebecca Ebianga — AI Engineer & ML Specialist";
const DESCRIPTION =
  "Portfolio of Rebecca Ebianga: applied machine learning pipelines, NLP systems, adversarial evaluation, and production web architectures.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rebecca Ebianga",
          jobTitle: "AI Engineer & Machine Learning Specialist",
          email: "mailto:rebeccaebianga@gmail.com",
          sameAs: [
            "https://www.linkedin.com/in/rebeccaebianga",
            "https://github.com/SimplyBecca5220",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <EducationTraining />
        <Contact />
      </main>
      <Footer />
      <AiTerminal />
    </div>
  );
}
