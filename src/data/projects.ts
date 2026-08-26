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
    slug: "consultamerica",
    name: "ConsultAmerica",
    category: "Enterprise Transformation Platform",
    description:
      "ConsultAmerica is an enterprise transformation and consulting platform designed to present AI transformation, digital modernization, business process improvement, professional consulting services, and enterprise technology solutions. The platform supports a strong business-facing brand presence with clear service sections, responsive design, and professional company positioning.",
    features: [],
    techStack: [
      "Enterprise Transformation",
      "Consulting Platform",
      "AI Transformation",
      "Business Website",
      "Cloudflare",
      "Responsive Design",
    ],
    liveUrl: "https://consult-america.hrconsult.workers.dev/",
    image: screenshot("https://consult-america.hrconsult.workers.dev/"),
  },
  {
    slug: "mediguide-ai",
    name: "MediGuide AI",
    category: "Healthcare AI Assistant",
    description:
      "MediGuide AI is a healthcare-focused AI platform designed to support clearer health conversations, patient-friendly explanations, structured intake, information summaries, safe AI boundaries, and responsible healthcare communication workflows. The project demonstrates practical healthcare AI design with a focus on clarity, safety, trust, and user support.",
    features: [],
    techStack: [
      "Healthcare AI",
      "Patient Communication",
      "AI Assistant",
      "HealthTech",
      "Responsible AI",
      "Cloudflare",
    ],
    liveUrl: "https://medi.hrconsult.workers.dev/",
    image: screenshot("https://medi.hrconsult.workers.dev/"),
  },
  {
    slug: "importnest-ai-agent",
    name: "ImportNest AI Agent",
    category: "AI Commerce Platform",
    description:
      "ImportNest is an AI-powered commerce platform that helps retailers improve product discovery, customer support, product recommendations, inventory visibility, and online shopping workflows. It is designed for retailers, online stores, Shopify/WooCommerce-style businesses, and product-based websites that want intelligent commerce automation.",
    features: [],
    techStack: [
      "AI Commerce",
      "Retail AI",
      "Product Recommendations",
      "Shopping Assistant",
      "Next.js",
      "OpenAI",
    ],
    liveUrl: "https://importnest.vercel.app/",
    image: screenshot("https://importnest.vercel.app/"),
  },
  {
    slug: "smartwrite-ai",
    name: "SmartWrite AI",
    category: "AI Writing Assistant",
    description:
      "SmartWrite AI is an AI-powered writing assistant that helps users improve grammar, clarity, tone, readability, and overall writing quality. It supports rewriting, writing scores, real-time suggestions, and writing modes for general, email, resume, academic, healthcare, and business content.",
    features: [],
    techStack: [
      "AI Writing",
      "Grammar Checker",
      "Content Generation",
      "OpenAI",
      "Next.js",
      "SaaS Dashboard",
    ],
    liveUrl: "https://grammarly-app-seven.vercel.app/",
    image: screenshot("https://grammarly-app-seven.vercel.app/"),
  },
  {
    slug: "joblens",
    name: "JobLens",
    category: "AI Resume and Job Platform",
    description:
      "JobLens is an AI-powered career platform that helps users analyze resumes, compare resumes with job descriptions, improve ATS compatibility, identify keyword gaps, generate cover letters, and track job applications through a clean dashboard workflow.",
    features: [],
    techStack: [
      "Resume AI",
      "ATS Analyzer",
      "Job Matching",
      "Cover Letter Generator",
      "Career Platform",
      "Next.js",
    ],
    liveUrl: "https://joblens-seven.vercel.app/",
    image: screenshot("https://joblens-seven.vercel.app/"),
  },
  {
    slug: "bosiano",
    name: "Bosiano",
    category: "Fashion E-Commerce Platform",
    description:
      "Bosiano is an Italian heritage-inspired fashion marketplace designed for modern online shopping experiences. It includes product presentation, responsive design, luxury fashion branding, customer-facing e-commerce pages, and a polished marketplace-style interface.",
    features: [],
    techStack: [
      "Fashion Marketplace",
      "E-Commerce",
      "Luxury Brand",
      "Next.js",
      "UI/UX",
      "Responsive Design",
    ],
    liveUrl: "https://bosiano.vercel.app/",
    image: screenshot("https://bosiano.vercel.app/"),
  },
  {
    slug: "sarco-appliances",
    name: "Sarco Appliances",
    category: "Appliance Sales and Service Platform",
    description:
      "Sarco Appliances is a business website for appliance sales, delivery, installation, and repair services. The platform presents appliance service offerings, customer-facing business information, service workflows, and responsive pages for an appliance-focused company.",
    features: [],
    techStack: [
      "Appliance Services",
      "Business Website",
      "Sales",
      "Repair",
      "Installation",
      "Next.js",
    ],
    liveUrl: "https://sarco-appliances.vercel.app/",
    image: screenshot("https://sarco-appliances.vercel.app/"),
  },
  {
    slug: "smart-appliances",
    name: "Smart Appliances",
    category: "Appliance, HVAC and Home Service Booking Platform",
    description:
      "Smart Appliances is a home-service booking platform for appliance, HVAC, and repair services. It supports service discovery, booking workflows, customer requests, business information, and responsive service-marketplace pages for home-service companies.",
    features: [],
    techStack: [
      "Home Services",
      "Appliance Repair",
      "HVAC",
      "Booking Platform",
      "Service Marketplace",
      "Next.js",
    ],
    liveUrl: "https://project-i8icw-ebon.vercel.app/",
    image: screenshot("https://project-i8icw-ebon.vercel.app/"),
  },
  {
    slug: "appointease",
    name: "AppointEase",
    category: "Appointment Booking Platform",
    description:
      "AppointEase is an appointment booking web application that allows users to select a service, choose a date and time, submit customer information, and complete a booking workflow through a clean responsive interface.",
    features: [],
    techStack: [
      "Appointment Booking",
      "Scheduling",
      "Service Platform",
      "Next.js",
      "Business App",
      "Responsive Design",
    ],
    liveUrl: "https://appointease-psi.vercel.app/",
    image: screenshot("https://appointease-psi.vercel.app/"),
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
  "Cloudflare",
];
