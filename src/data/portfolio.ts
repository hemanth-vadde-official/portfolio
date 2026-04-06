export const personalInfo = {
  name: "Hemanth Vadde",
  title: "Cloud & DevOps Engineer",
  tagline:
    "4+ years of expertise in Azure, Kubernetes, CI/CD, and Infrastructure-as-Code — building scalable, reliable, and automated cloud infrastructure.",
  email: "mrhemanth45@gmail.com",
  phone: "+91-9030612413",
  location: "Bengaluru, India (Willing to Relocate)",
  bio: "Cloud & DevOps Engineer with 4+ years of experience in Azure, AKS, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, Azure DevOps), Infrastructure-as-Code, Linux, Python, and cloud security. Experienced in deploying GenAI workloads, microservices, and enterprise platforms with monitoring & observability (Prometheus, Grafana). Strong focus on automation, reliability, cost optimization, and scalable cloud architecture.",
  resumeUrl: "/Hemanth_DevOps_Resume.pdf",
  social: {
    github: "https://github.com/hemanth-vadde-official",
    linkedin: "https://www.linkedin.com/in/hemanthvadde/",
  },
};

export const skills = [
  {
    category: "Cloud Platforms",
    items: ["Microsoft Azure", "AWS"],
  },
  {
    category: "CI/CD & DevOps Tools",
    items: ["Azure DevOps", "Azure Pipelines", "GitHub Actions"],
  },
  {
    category: "Containerization & Orchestration",
    items: ["Docker", "Kubernetes (AKS)"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "ARM Templates"],
  },
  {
    category: "Monitoring & Logging",
    items: [
      "Azure Monitor",
      "Prometheus",
      "Grafana",
      "Application Insights",
      "Log Analytics",
    ],
  },
  {
    category: "Version Control & SCM",
    items: ["Git", "GitHub", "Azure Repos"],
  },
  {
    category: "OS & Scripting",
    items: ["Linux", "Windows", "Bash", "PowerShell"],
  },
  {
    category: "Methodologies",
    items: ["SDLC", "Agile", "Scrum"],
  },
];

export const projects = [
  {
    id: 1,
    title: "GenAI Workloads on AKS",
    description:
      "Created and maintained Helm charts for complex GenAI workloads including N8N, Qdrant, Langfuse, Airflow, LLMs, Weaviate, Langflow, and Flowwise — self-hosted on Azure Kubernetes Service for scalability and reliability.",
    image: "",
    tags: ["AKS", "Helm", "Docker", "Azure", "GenAI"],
    liveUrl: "https://github.com/hemanth-vadde-official",
    githubUrl: "https://github.com/hemanth-vadde-official",
    featured: true,
  },
  {
    id: 2,
    title: "Azure CI/CD Pipeline Automation",
    description:
      "Built modular YAML-based CI/CD pipelines in Azure DevOps for Next.js, FastAPI, and Streamlit apps, cutting deployment time by 30% and improving release consistency across environments.",
    image: "",
    tags: ["Azure DevOps", "YAML", "CI/CD", "Docker", "AKS"],
    liveUrl: "https://github.com/hemanth-vadde-official",
    githubUrl: "https://github.com/hemanth-vadde-official",
    featured: true,
  },
  {
    id: 3,
    title: "Centralized Monitoring Stack",
    description:
      "Established centralized monitoring using Azure Monitor, Prometheus, and Grafana, enhancing system observability and reducing incident resolution time by 25%.",
    image: "",
    tags: ["Prometheus", "Grafana", "Azure Monitor", "Alerting"],
    liveUrl: "https://github.com/hemanth-vadde-official",
    githubUrl: "https://github.com/hemanth-vadde-official",
    featured: true,
  },
  {
    id: 4,
    title: "Azure Networking & Security",
    description:
      "Configured Azure VNets, Subnets, Private Endpoints, and VPNs to enable secure CI/CD workflows. Set up custom domains, DNS records, and SSL certificates for secure access.",
    image: "",
    tags: ["Azure VNet", "VPN", "SSL", "DNS", "Security"],
    liveUrl: "https://github.com/hemanth-vadde-official",
    githubUrl: "https://github.com/hemanth-vadde-official",
    featured: true,
  },
];

export const experiences = [
  {
    id: 1,
    role: "DevOps Engineer",
    company: "CodeSage India Private Limited (Kvell Dynamics)",
    location: "Pune, India",
    period: "Nov 2024 – Present",
    description: [
      "Built modular YAML-based CI/CD pipelines in Azure DevOps for Next.js, FastAPI, and Streamlit apps, cutting deployment time by 30%",
      "Automated containerized deployments of Airflow, LiteLLM, Langfuse, Langflow, and Weaviate on AKS using Docker and Helm, improving release reliability by 40%",
      "Created and maintained Helm charts for complex GenAI workloads (N8N, Qdrant, Langfuse, Airflow, LLMs, Weaviate, Langflow, Flowwise) self-hosted on AKS",
      "Established centralized monitoring using Azure Monitor, Prometheus, and Grafana, reducing incident resolution time by 25%",
      "Configured Azure VNets, Subnets, Private Endpoints, and VPNs to enable secure CI/CD workflows",
      "Integrated Azure OpenAI, Azure Communication Services, and Azure Foundry to support AI-driven solutions",
    ],
  },
  {
    id: 2,
    role: "DevOps Engineer",
    company: "Mars Infosol Private Limited",
    location: "Hyderabad, India",
    period: "May 2023 – Oct 2024",
    description: [
      "Automated build, test, and release processes in Azure DevOps, reducing deployment failures by 15%",
      "Integrated SonarCloud and GitHub with pipelines to improve code quality and security compliance",
      "Deployed and maintained self-hosted agents to handle high-volume builds, improving pipeline throughput",
      "Managed Azure resources (VMs, Storage Accounts, App Service Plans, Key Vaults) for project delivery",
      "Integrated pipelines with Azure Container Registry (ACR) for Docker image storage and deployment",
      "Created and managed AKS clusters for deploying containerized applications",
    ],
  },
  {
    id: 3,
    role: "Firmware & Embedded Engineering Associate - DevOps",
    company: "Accenture",
    location: "Hyderabad, India",
    period: "Mar 2022 – Apr 2023",
    description: [
      "Built and managed CI/CD pipelines in Azure DevOps for .NET backend and Node.js frontend applications",
      "Coordinated and executed multi-environment deployments (Development, QA, Staging, Production)",
      "Provisioned Azure infrastructure including App Services, Storage Accounts, Networking, and IAM configurations",
      "Installed and configured security tools on Azure VMs, performed vulnerability assessments for compliance",
      "Automated application configuration updates using Azure Pipelines, reducing manual effort",
      "Managed version control workflows, enforcing Git best practices for collaborative development",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Sri Krishnadevaraya University (SKU)",
    location: "Anantapur",
    period: "2019 – 2021",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science (BSC)",
    institution: "Sri Krishnadevaraya University (SKU)",
    location: "Anantapur",
    period: "2016 – 2019",
  },
];

export const certifications = [
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft Certified: Azure AI Fundamentals",
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
