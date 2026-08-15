export const CONTACT = {
  email: "rebeccaebianga@gmail.com",
  linkedin: "https://www.linkedin.com/in/rebeccaebianga",
  github: "https://github.com/SimplyBecca5220",
};

export const SKILL_GROUPS = [
  {
    title: "Core ML & Deep Learning",
    tag: "Advanced",
    accent: "cyan" as const,
    items: [
      "PyTorch",
      "Scikit-learn",
      "Deep Learning",
      "Linear & Logistic Regression",
      "Feature Engineering",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "NLP & Model Optimization",
    tag: "Advanced",
    accent: "violet" as const,
    items: [
      "Hugging Face Transformers",
      "Generative AI Integration",
      "PEFT / LoRA",
      "Prompt Engineering",
      "Text Classification",
    ],
  },
  {
    title: "Evaluation & Safety Engineering",
    tag: "Specialist",
    accent: "cyan" as const,
    items: [
      "Adversarial Evasion Testing",
      "Verifier Drift Detection",
      "Model Vulnerability Hardening",
      "Human-in-the-Loop Scoring Calibration",
    ],
  },
  {
    title: "Web Stack & Architecture",
    tag: "Production",
    accent: "violet" as const,
    items: [
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Streamlit",
      "FastAPI",
      "Low-Bandwidth Web Optimization",
    ],
  },
];

export const PROJECTS = [
  {
    index: "01",
    title: "Authorship & Adversarial AI Detector",
    org: "Hack51 Africa",
    overview:
      "Stylometric and structural feature extraction pipeline detecting AI vs. human-authored submissions.",
    rigor:
      "Built an end-to-end labeled corpus, conducted adversarial evasion testing, retrained on hard edge cases, and implemented a verifier drift-detection prototype for human-in-the-loop scoring.",
    stack: ["Python", "Scikit-learn", "Transformers", "Streamlit"],
    metrics: [
      { label: "pipeline", value: "end-to-end" },
      { label: "eval", value: "adversarial" },
      { label: "loop", value: "human-in-the-loop" },
    ],
    links: [
      { label: "Live Demo / Streamlit", href: CONTACT.github },
      { label: "GitHub Repo", href: CONTACT.github },
      { label: "Evaluation Writeup", href: CONTACT.github },
    ],
  },
  {
    index: "02",
    title: "Digital Mental Health & Triage Web Suite",
    org: "Mentrix LTD",
    overview:
      "Privacy-focused, accessible web application providing automated self-assessment tools and digital counseling resources.",
    rigor:
      "Lightweight, low-bandwidth architecture optimized for fast client-side execution with zero data leakage.",
    stack: ["FastAPI", "JavaScript", "CSS3", "Edge-first UX"],
    metrics: [
      { label: "data", value: "zero leakage" },
      { label: "runtime", value: "client-side" },
      { label: "payload", value: "low-bandwidth" },
    ],
    links: [
      { label: "Live App", href: CONTACT.github },
      { label: "GitHub Repo", href: CONTACT.github },
      { label: "Architecture Spec", href: CONTACT.github },
    ],
  },
  {
    index: "03",
    title: "SkillSync — Collaborative Engineering Platform",
    org: "Mentrix LTD",
    overview:
      "Open peer-to-peer technical mentorship and project-matching platform.",
    rigor:
      "Won 1st Place (State Level) and Fellow of the Week at a national technology knowledge showcase for scalable web architecture.",
    stack: ["Python", "JavaScript", "Scalable Web Architecture"],
    metrics: [
      { label: "award", value: "1st place · state" },
      { label: "honor", value: "fellow of the week" },
      { label: "model", value: "peer-to-peer" },
    ],
    links: [
      { label: "Live Platform", href: CONTACT.github },
      { label: "GitHub Repo", href: CONTACT.github },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Founder & Lead AI Builder",
    company: "Mentrix LTD",
    period: "Jan 2026 – Present",
    points: [
      "Architected, trained, and evaluated custom machine learning models using PyTorch, Scikit-learn, NumPy, and Pandas for predictive modeling, feature engineering, and statistical analysis.",
      "Deployed scalable, low-bandwidth web architectures including SkillSync and privacy-focused assessment applications.",
    ],
  },
  {
    role: "AI/ML Researcher",
    company: "Hack51 Africa LTD",
    period: "Jun 2026 – Present",
    points: [
      "Engineered stylometric/structural features to build labeled corpora and baseline text classification models.",
      "Executed adversarial evasion testing, model hardening, and verifier drift-detection prototypes across the full ML lifecycle.",
    ],
  },
];

export const EDUCATION = [
  { title: "Deep Learning", org: "WorldQuant University", period: "2026 – 2027" },
  {
    title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    org: "University of Calabar",
    period: "Jan 2018 – Feb 2026",
  },
  { title: "Diploma in Information and Computer Technology", org: "", period: "2016" },
];

export const TRAINING = [
  {
    title: "AI / ML Fellowship",
    org: "3 Million Technical Talent (3MTT) Nigeria",
    period: "Feb 2026 – Jul 2026",
  },
  { title: "Universal AI Program Certificate", org: "MIT Open Learning", period: "Jul 2026" },
  {
    title: "AI in Healthcare Specialization",
    org: "Stanford University School of Medicine",
    period: "Aug 2026",
  },
  { title: "Prompt Engineering", org: "Founderz", period: "Jul 2026" },
  {
    title: "Digital Communications & Team Management",
    org: "La Plage Metaverse",
    period: "Jan 2022",
  },
];

export type TerminalReply = { prompt: string; lines: string[] };

export const TERMINAL_REPLIES: TerminalReply[] = [
  {
    prompt: "Show PyTorch & ML experience",
    lines: [
      "> loading profile.ml_core ...",
      "PyTorch · Scikit-learn · NumPy · Pandas",
      "Custom model architecture, training loops, and evaluation harnesses",
      "Predictive modeling + feature engineering at Mentrix LTD (2026 – present)",
      "Deep Learning coursework: WorldQuant University (2026 – 2027)",
    ],
  },
  {
    prompt: "Explain Hack51 adversarial testing",
    lines: [
      "> loading eval.hack51 ...",
      "1. Built an end-to-end labeled corpus (human vs. AI-authored submissions)",
      "2. Extracted stylometric + structural features for baseline classifiers",
      "3. Ran adversarial evasion testing against the detector",
      "4. Retrained on hard edge cases → hardened decision boundary",
      "5. Shipped a verifier drift-detection prototype for human-in-the-loop scoring",
    ],
  },
  {
    prompt: "Review technical stack",
    lines: [
      "> cat stack.toml",
      "ml      = ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas']",
      "nlp     = ['Transformers', 'PEFT/LoRA', 'Prompt Engineering']",
      "safety  = ['Adversarial Eval', 'Drift Detection', 'Hardening']",
      "web     = ['Python', 'FastAPI', 'Streamlit', 'JS/HTML5/CSS3']",
    ],
  },
  {
    prompt: "Availability & contact",
    lines: [
      "> whoami --availability",
      "Rebecca Ebianga — AI / ML Engineer & Technical Systems Builder",
      "Status: available for global AI engineering roles & consultations",
      "Active hours: 8am – 9pm (UTC+1, WAT), daily",
      `Email: ${CONTACT.email}`,
    ],
  },
];
