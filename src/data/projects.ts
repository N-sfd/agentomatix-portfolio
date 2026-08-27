export type ProjectFilter =
  | "All"
  | "AI"
  | "Healthcare"
  | "Commerce"
  | "Business"
  | "E-Commerce"
  | "Booking"
  | "Services";

export type ProjectDetails = {
  problem: string;
  features: string[];
  tech: string[];
  useCase: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  filters: ProjectFilter[];
  tags: string[];
  liveUrl: string;
  image?: string;
  details: ProjectDetails;
};

/** Builds a live screenshot URL of a deployed site (no API key required). */
function screenshot(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/750/noanimate/${url}`;
}

export const projectFilters: ProjectFilter[] = [
  "All",
  "AI",
  "Healthcare",
  "Commerce",
  "Business",
  "E-Commerce",
  "Booking",
  "Services",
];

export const projects: Project[] = [
  {
    slug: "consultamerica",
    name: "ConsultAmerica",
    category: "Enterprise Transformation Platform",
    description:
      "Enterprise transformation and consulting platform for AI transformation, digital modernization, business process improvement, and professional technology services.",
    filters: ["Business", "Services"],
    tags: [
      "Enterprise Transformation",
      "Consulting Platform",
      "AI Transformation",
      "Business Website",
      "Cloudflare",
      "Responsive Design",
    ],
    liveUrl: "https://consult-america.hrconsult.workers.dev/",
    image: screenshot("https://consult-america.hrconsult.workers.dev/"),
    details: {
      problem:
        "Consulting firms need a credible digital presence that clearly communicates AI transformation and enterprise technology services to decision-makers.",
      features: [
        "Business-facing brand presence",
        "Clear service section structure",
        "Responsive professional layout",
        "Enterprise positioning and messaging",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare Workers"],
      useCase:
        "Ideal for consulting agencies and transformation practices that need a polished company website to win enterprise clients.",
    },
  },
  {
    slug: "mediguide-ai",
    name: "MediGuide AI",
    category: "Healthcare AI Assistant",
    description:
      "Healthcare AI platform for clearer health conversations, structured intake, safe AI boundaries, patient-friendly explanations, and responsible health communication.",
    filters: ["AI", "Healthcare"],
    tags: [
      "Healthcare AI",
      "Patient Communication",
      "AI Assistant",
      "HealthTech",
      "Responsible AI",
      "Cloudflare",
    ],
    liveUrl: "https://medi.hrconsult.workers.dev/",
    image: screenshot("https://medi.hrconsult.workers.dev/"),
    details: {
      problem:
        "Patients and care teams need clearer, safer AI-assisted communication without replacing clinical judgment.",
      features: [
        "Patient-friendly explanations",
        "Structured intake support",
        "Safe AI response boundaries",
        "Responsible healthcare communication workflows",
      ],
      tech: ["Next.js", "React", "OpenAI API", "Tailwind CSS", "Cloudflare Workers"],
      useCase:
        "Useful for healthtech startups and clinics exploring support tools for intake, summaries, and patient education.",
    },
  },
  {
    slug: "importnest-ai-agent",
    name: "ImportNest AI Agent",
    category: "AI Commerce Platform",
    description:
      "AI commerce platform for retailers, online stores, product recommendations, shopping assistance, customer support, and intelligent commerce automation.",
    filters: ["AI", "Commerce", "E-Commerce"],
    tags: [
      "AI Commerce",
      "Retail AI",
      "Shopping Assistant",
      "Product Recommendations",
      "Next.js",
      "OpenAI",
    ],
    liveUrl: "https://importnest.vercel.app/",
    image: screenshot("https://importnest.vercel.app/"),
    details: {
      problem:
        "Retailers need intelligent product discovery and shopping support without rebuilding their entire storefront stack.",
      features: [
        "Product recommendations",
        "Shopping assistant workflows",
        "Customer support automation",
        "Inventory visibility concepts",
      ],
      tech: ["Next.js", "React", "OpenAI API", "TypeScript", "Vercel"],
      useCase:
        "Built for online stores, Shopify/WooCommerce-style businesses, and product-based websites seeking commerce AI.",
    },
  },
  {
    slug: "smartwrite-ai",
    name: "SmartWrite AI",
    category: "AI Writing Assistant",
    description:
      "AI writing assistant for grammar correction, rewriting, tone improvement, readability scoring, writing quality, and specialized content workflows.",
    filters: ["AI"],
    tags: [
      "AI Writing",
      "Grammar Checker",
      "Content Generation",
      "OpenAI",
      "Next.js",
      "SaaS Dashboard",
    ],
    liveUrl: "https://grammarly-app-seven.vercel.app/",
    image: screenshot("https://grammarly-app-seven.vercel.app/"),
    details: {
      problem:
        "Professionals need faster writing quality improvements across email, resumes, academic, and business content.",
      features: [
        "Grammar and clarity suggestions",
        "Rewriting and tone improvement",
        "Writing score feedback",
        "Domain-specific writing modes",
      ],
      tech: ["Next.js", "React", "OpenAI API", "Tailwind CSS", "Vercel"],
      useCase:
        "A SaaS-style writing product for freelancers, students, and business teams who need cleaner content quickly.",
    },
  },
  {
    slug: "joblens",
    name: "JobLens",
    category: "AI Resume and Job Platform",
    description:
      "AI career platform for resume analysis, ATS keyword feedback, job matching, cover-letter generation, and application tracking.",
    filters: ["AI", "Business"],
    tags: [
      "Resume AI",
      "ATS Analyzer",
      "Job Matching",
      "Cover Letter Generator",
      "Career Platform",
      "Next.js",
    ],
    liveUrl: "https://joblens-seven.vercel.app/",
    image: screenshot("https://joblens-seven.vercel.app/"),
    details: {
      problem:
        "Job seekers struggle to align resumes with ATS systems and track applications across roles.",
      features: [
        "Resume analysis",
        "ATS keyword gap feedback",
        "Job description matching",
        "Cover letter generation and application tracking",
      ],
      tech: ["Next.js", "React", "OpenAI API", "Tailwind CSS", "Vercel"],
      useCase:
        "Designed for career platforms, coaching products, and job-seeker tools that need AI-assisted hiring workflows.",
    },
  },
  {
    slug: "bosiano",
    name: "Bosiano",
    category: "Fashion E-Commerce Platform",
    description:
      "Italian heritage-inspired fashion e-commerce platform with luxury branding, product presentation, marketplace-style layout, and responsive shopping pages.",
    filters: ["E-Commerce", "Commerce"],
    tags: [
      "Fashion Marketplace",
      "E-Commerce",
      "Luxury Brand",
      "Next.js",
      "UI/UX",
      "Responsive Design",
    ],
    liveUrl: "https://bosiano.vercel.app/",
    image: screenshot("https://bosiano.vercel.app/"),
    details: {
      problem:
        "Fashion brands need a polished online shopping experience that communicates luxury without sacrificing usability.",
      features: [
        "Product presentation pages",
        "Luxury brand visual system",
        "Marketplace-style browsing",
        "Responsive shopping interface",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      useCase:
        "A fit for fashion retailers and heritage brands that want a modern, conversion-ready storefront.",
    },
  },
  {
    slug: "sarco-appliances",
    name: "Sarco Appliances",
    category: "Appliance Sales and Service Platform",
    description:
      "Appliance sales and service business website for delivery, installation, repair services, customer information, and responsive service pages.",
    filters: ["Business", "Services"],
    tags: [
      "Appliance Services",
      "Business Website",
      "Sales",
      "Repair",
      "Installation",
      "Next.js",
    ],
    liveUrl: "https://sarco-appliances.vercel.app/",
    image: screenshot("https://sarco-appliances.vercel.app/"),
    details: {
      problem:
        "Local appliance businesses need a clear digital storefront for sales, delivery, installation, and repair inquiries.",
      features: [
        "Service offering presentation",
        "Customer-facing business information",
        "Sales and repair workflow pages",
        "Responsive local-business layout",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      useCase:
        "Built for appliance retailers and service companies that need a trustworthy customer-facing website.",
    },
  },
  {
    slug: "smart-appliances",
    name: "Smart Appliances",
    category: "Appliance, HVAC and Home Service Booking Platform",
    description:
      "Home-service booking platform for appliance, HVAC, and repair services with booking workflows, service discovery, and customer request handling.",
    filters: ["Booking", "Services", "Business"],
    tags: [
      "Home Services",
      "Appliance Repair",
      "HVAC",
      "Booking Platform",
      "Service Marketplace",
      "Next.js",
    ],
    liveUrl: "https://project-i8icw-ebon.vercel.app/",
    image: screenshot("https://project-i8icw-ebon.vercel.app/"),
    details: {
      problem:
        "Home-service companies need an easy way for customers to discover services and submit booking requests online.",
      features: [
        "Service discovery",
        "Booking request workflows",
        "HVAC and appliance service pages",
        "Responsive service marketplace layout",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      useCase:
        "Useful for HVAC, appliance, and home-repair businesses that want a booking-oriented digital presence.",
    },
  },
  {
    slug: "appointease",
    name: "AppointEase",
    category: "Appointment Booking Platform",
    description:
      "Appointment booking application for service selection, date/time scheduling, customer details, confirmation workflows, and responsive business booking.",
    filters: ["Booking", "Business"],
    tags: [
      "Appointment Booking",
      "Scheduling",
      "Service Platform",
      "Next.js",
      "Business App",
      "Responsive Design",
    ],
    liveUrl: "https://appointease-psi.vercel.app/",
    image: screenshot("https://appointease-psi.vercel.app/"),
    details: {
      problem:
        "Service businesses need a simple booking flow that captures service choice, schedule, and customer details without friction.",
      features: [
        "Service selection",
        "Date and time scheduling",
        "Customer details capture",
        "Booking confirmation workflow",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      useCase:
        "A practical MVP for salons, clinics, consultants, and local service providers that take appointments online.",
    },
  },
];

export type ServiceItem = {
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    title: "AI Web App Development",
    description:
      "Build AI-powered web applications using OpenAI API, React, Next.js, and modern cloud deployment.",
  },
  {
    title: "AI Writing Tools",
    description:
      "Create grammar checkers, content generators, rewriting tools, tone editors, and writing dashboards.",
  },
  {
    title: "AI Resume and Career Platforms",
    description:
      "Build resume analyzers, ATS scoring tools, job matching workflows, and cover-letter generators.",
  },
  {
    title: "AI Commerce Agents",
    description:
      "Create shopping assistants, product recommendation systems, product Q&A, and e-commerce automation tools.",
  },
  {
    title: "Healthcare AI Workflows",
    description:
      "Design safe healthcare AI tools for intake, summaries, patient-friendly explanations, and responsible communication.",
  },
  {
    title: "SaaS Dashboards",
    description:
      "Build modern dashboards for business workflows, admin panels, analytics, and user management.",
  },
  {
    title: "Booking and Scheduling Apps",
    description:
      "Create appointment booking, service scheduling, availability, confirmation, and customer workflow systems.",
  },
  {
    title: "E-Commerce and Marketplace Platforms",
    description:
      "Build product catalogs, marketplace layouts, service platforms, fashion stores, and retail websites.",
  },
  {
    title: "API and Database Integration",
    description:
      "Connect apps with REST APIs, Firebase, Supabase, databases, authentication, and cloud deployment.",
  },
];

export type TechGroup = {
  label: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "REST APIs"],
  },
  {
    label: "AI",
    items: ["OpenAI API", "Prompt Engineering", "RAG Fundamentals", "AI Workflows"],
  },
  {
    label: "Databases",
    items: ["Firebase", "Supabase"],
  },
  {
    label: "Deployment",
    items: ["Vercel", "Cloudflare Pages", "Netlify"],
  },
  {
    label: "Tools",
    items: ["GitHub", "Postman", "CI/CD"],
  },
];

export const whyItems = [
  {
    title: "Full-Stack + AI Integration",
    description:
      "Frontend, backend, APIs, databases, and AI workflows combined into complete working applications.",
  },
  {
    title: "Business-Focused Product Thinking",
    description:
      "Every build starts with the business problem, user workflow, and expected outcome.",
  },
  {
    title: "Fast MVP Delivery",
    description:
      "Ideas can move quickly from concept to deployed demo with clean, testable implementation.",
  },
  {
    title: "Clean UI and Responsive Design",
    description: "Modern interfaces built for desktop, tablet, and mobile users.",
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Experience across healthcare AI, commerce, resume platforms, writing tools, booking systems, consulting websites, and service marketplaces.",
  },
  {
    title: "Deployment-Ready Builds",
    description:
      "Projects are built and deployed using platforms such as Vercel, Cloudflare Pages, Netlify, Firebase, and Supabase.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the business goal, users, workflow, and required features.",
  },
  {
    step: "02",
    title: "Design",
    description: "Create the product structure, screens, user flow, and technical plan.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop the frontend, backend, AI workflows, APIs, database, and dashboard.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Test, polish, deploy, and provide handoff documentation.",
  },
];
