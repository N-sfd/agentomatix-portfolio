export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  /**
   * Screenshot/preview image for the project card. Live apps use an
   * auto-generated screenshot of the deployed site; concept builds without a
   * public URL fall back to a styled placeholder rendered in ProjectCard.
   */
  image?: string;
};

/** Builds a live screenshot URL of a deployed site (no API key required). */
function screenshot(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/750/noanimate/${url}`;
}

export const projects: Project[] = [
  {
    slug: "smartwrite-ai",
    name: "SmartWrite AI",
    category: "AI Writing Assistant",
    description:
      "SmartWrite AI is an AI-powered writing assistant and grammar checker web app that helps users improve grammar, clarity, tone, readability, and content quality. It includes writing score, suggestions, tone improvement, rewrite tools, and domain-specific writing modes.",
    features: [
      "Grammar correction",
      "Writing score",
      "Tone improvement",
      "Rewrite suggestions",
      "Domain modes: General, Email, Resume, Academic, Healthcare, Business",
    ],
    techStack: ["React", "Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://grammarly-app-seven.vercel.app/",
    image: screenshot("https://grammarly-app-seven.vercel.app/"),
  },
  {
    slug: "joblens",
    name: "JobLens",
    category: "AI Resume Analyzer and Job Platform",
    description:
      "JobLens is an AI-powered job search platform that helps users analyze resumes, compare resumes with job descriptions, receive ATS-style feedback, generate cover letters, and track job applications.",
    features: [
      "Resume analyzer",
      "Job description matching",
      "ATS keyword feedback",
      "Cover letter generator",
      "Job tracker dashboard",
    ],
    techStack: ["React", "Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://joblens-seven.vercel.app/",
    image: screenshot("https://joblens-seven.vercel.app/"),
  },
  {
    slug: "relay",
    name: "Relay",
    category: "AI Agent Human Handoff Infrastructure",
    description:
      "Relay is an AI agent human-handoff infrastructure platform. When an AI agent gets stuck, loses confidence, or reaches the boundary of what it can safely handle, Relay transfers the task to a human with structured context, issue summary, confidence score, conversation history, and recommended next steps.",
    features: [
      "AI agent handoff workflow",
      "Confidence-based escalation",
      "Human review dashboard",
      "Structured context transfer",
      "Audit-style activity feed",
    ],
    techStack: ["React", "Next.js", "TypeScript", "OpenAI API", "SaaS Dashboard"],
  },
  {
    slug: "ai-medical-assistant",
    name: "AI Medical Assistant",
    category: "Healthcare AI Assistant Concept",
    description:
      "AI Medical Assistant is a healthcare-focused AI assistant concept designed for patient intake, medical information summaries, safe workflow support, and human escalation. It is designed as a support tool, not a replacement for medical professionals.",
    features: [
      "Patient intake workflow",
      "Medical summary support",
      "Safe response boundaries",
      "Human escalation",
      "Healthcare-focused assistant UI",
    ],
    techStack: ["React", "Next.js", "OpenAI API", "Tailwind CSS"],
  },
  {
    slug: "appointease",
    name: "AppointEase",
    category: "Appointment Booking Web App",
    description:
      "AppointEase is an appointment booking web app for service businesses. It supports service selection, date/time booking, customer details, and appointment workflow management.",
    features: [
      "Service selection",
      "Date and time booking",
      "Customer details form",
      "Booking confirmation",
      "Responsive booking interface",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://appointease-psi.vercel.app/",
    image: screenshot("https://appointease-psi.vercel.app/"),
  },
  {
    slug: "smart-appliances",
    name: "Smart Appliances",
    category: "Service Marketplace Platform",
    description:
      "Smart Appliances is a home services and appliance repair platform designed for service providers, technicians, and customers. It includes service pages, expert profiles, customer-facing pages, and a professional local business layout.",
    features: [
      "Service marketplace layout",
      "Technician profile concept",
      "Appliance repair service pages",
      "Customer-facing business website",
      "Responsive design",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Netlify"],
    liveUrl: "https://smart-appliances-e0rrkbewk-n-sfds-projects.vercel.app",
    image: screenshot("https://smart-appliances-e0rrkbewk-n-sfds-projects.vercel.app"),
  },
];

export const services: string[] = [
  "AI Web App Development",
  "OpenAI API Integration",
  "AI Chatbot Development",
  "RAG and Document Q&A Workflows",
  "AI Resume Analyzer Development",
  "AI Writing Assistant Development",
  "SaaS Dashboard Development",
  "Appointment Booking Apps",
  "Service Marketplace Platforms",
  "AI Agent and Human Handoff Workflows",
];

export const techStack: string[] = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "OpenAI API",
  "REST APIs",
  "Firebase",
  "Supabase",
  "Vercel",
  "Netlify",
];
