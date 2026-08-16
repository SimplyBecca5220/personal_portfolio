import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Brain,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Terminal as TerminalIcon,
} from "lucide-react";

import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SKILL_GROUPS,
  TRAINING,
} from "./data";

const NAV = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as const },
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <motion.div {...fadeUp} className="mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </motion.div>
      {children}
    </section>
  );
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          rebecca<span className="text-cyan">.ebianga</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-full border border-cyan/40 px-4 py-1.5 text-xs font-medium text-cyan transition-colors hover:bg-cyan/10"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-signal" />
            Available for AI engineering roles
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Rebecca Ebianga
            <span className="block text-gradient">AI Engineer & ML Specialist</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build applied machine learning pipelines, NLP systems, adversarial evaluation
            harnesses, and production web architectures — with a bias toward rigor, safety, and
            low-bandwidth performance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View projects <ArrowUpRight className="size-4" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Brain, k: "Focus", v: "Applied ML & NLP" },
              { icon: ShieldCheck, k: "Specialty", v: "Adversarial evaluation" },
              { icon: Sparkles, k: "Active", v: "8am–9pm WAT (UTC+1)" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="glass hover-lift rounded-xl p-4">
                <Icon className="size-4 text-cyan" />
                <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-1 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Technical skill matrix"
      description="Depth across the full ML lifecycle — from feature engineering and training to evaluation, hardening, and shipping."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            className="glass hover-lift rounded-2xl p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                  group.accent === "cyan"
                    ? "border-cyan/40 text-cyan"
                    : "border-violet/40 text-violet"
                }`}
              >
                {group.tag}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects with engineering rigor"
      description="Each build documents the problem, the evaluation methodology, and the production stack behind it."
    >
      <div className="space-y-5">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            className="glass hover-lift rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-violet">{p.index}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.org}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.overview}</p>
                <p className="mt-3 border-l-2 border-cyan/40 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {p.rigor}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/3">
                <dl className="grid grid-cols-3 gap-3 lg:grid-cols-1">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-border bg-card/40 p-3">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-cyan">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-col gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs transition-colors hover:border-cyan/40 hover:text-cyan"
                    >
                      {l.label} <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Track record" title="Professional experience">
      <div className="relative space-y-5 border-l border-border pl-6">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.role}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-2 size-2.5 rounded-full bg-cyan" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-violet">{e.company}</p>
              <ul className="mt-4 space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function EducationTraining() {
  const cols = [
    { heading: "Education", items: EDUCATION },
    { heading: "Training & Certifications", items: TRAINING },
  ];
  return (
    <Section id="education" eyebrow="Foundations" title="Education & continuous training">
      <div className="grid gap-5 md:grid-cols-2">
        {cols.map((col, i) => (
          <motion.div
            key={col.heading}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-violet">
              {col.heading}
            </h3>
            <ul className="mt-5 space-y-4">
              {col.items.map((item) => (
                <li key={item.title} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {[item.org, item.period].filter(Boolean).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something rigorous"
      description="Open to global AI engineering roles, research collaborations, and consultations."
    >
      <motion.div {...fadeUp} className="glass rounded-2xl p-6 sm:p-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { icon: Linkedin, label: "LinkedIn", value: "in/rebeccaebianga", href: CONTACT.linkedin },
            { icon: Github, label: "GitHub", value: "SimplyBecca5220", href: CONTACT.github },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="hover-lift rounded-xl border border-border bg-card/40 p-5"
            >
              <Icon className="size-4 text-cyan" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </p>
              <p className="mt-1 break-all text-sm font-medium">{value}</p>
            </a>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          <TerminalIcon className="mr-2 inline size-3.5 text-signal" />
          Active 8am – 9pm daily (UTC+1, WAT)
        </p>
      </motion.div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Rebecca Ebianga. All rights reserved.</p>
        <p className="font-mono">Built with rigor · AI / ML Engineering</p>
      </div>
    </footer>
  );
}
