export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  borderAccent: string;
  link: string;
  image: string;
  challenge: string;
  solution: string;
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "meridian-crm",
    title: "Meridian CRM",
    category: "Web Application",
    description:
      "Enterprise client relationship management platform with real-time analytics, automated lead scoring, and multi-team collaboration dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-[#00F0FF]/20 to-[#D4942A]/10",
    borderAccent: "#00F0FF",
    link: "/case-studies/meridian-crm",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    challenge:
      "Meridian needed to consolidate three legacy data systems into a single, unified CRM without interrupting their active global sales operations of over 200 daily active representatives.",
    solution:
      "We engineered a scalable, cloud-native architecture on AWS using a decoupled Node.js API and a high-performance React frontend. We introduced automated lead scoring algorithms and real-time WebSockets to sync data across teams instantly.",
    impact:
      "Deployment resulted in a 40% reduction in average data retrieval times and increased daily pipeline throughput by 25% within the first two quarters of operation.",
  },
  {
    slug: "nexahealth",
    title: "NexaHealth",
    category: "Mobile App",
    description:
      "Telehealth and patient management mobile app supporting video consultations, prescription tracking, and health analytics for 50K+ active users.",
    tags: ["React Native", "Firebase", "TypeScript", "Stripe"],
    gradient: "from-[#B829FF]/20 to-[#5A7258]/10",
    borderAccent: "#B829FF",
    link: "/case-studies/nexahealth",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    challenge:
      "NexaHealth was struggling with low patient retention due to a complex, non-responsive legacy mobile application that made booking tele-consultations difficult.",
    solution:
      "We redesigned the UI from scratch, optimizing user funnels for 1-click bookings. The platform was migrated to a high-speed React Native architecture, integrating Firebase for real-time chat and Stripe for seamless telemedicine payments.",
    impact:
      "The app successfully scaled to support 50K+ active users without latency issues, pushing patient retention up by 65% and decreasing dropped consultation rates down to 4%.",
  },
  {
    slug: "autoflow",
    title: "AutoFlow",
    category: "AI / Automation",
    description:
      "AI-powered workflow automation engine that reduces manual data processing by 85% through intelligent document parsing and task routing.",
    tags: ["Python", "TensorFlow", "FastAPI", "Redis"],
    gradient: "from-[#FF2A6D]/20 to-[#4A6FA0]/10",
    borderAccent: "#FF2A6D",
    link: "/case-studies/autoflow",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    challenge:
      "AutoFlow's back-office operations required massive manual data entry from scanned invoices and documents, costing them thousands of engineering hours annually.",
    solution:
      "We deployed a custom TensorFlow-based NLP model specifically trained to parse unstructured document data. We exposed this model behind a lightning-fast FastAPI interface and integrated it deeply into their existing ERP.",
    impact:
      "The AI pipeline correctly processed 98.5% of unstructured documents automatically, effectively reducing manual back-office tasks by 85% and saving the firm $1.2M in annual operational costs.",
  },
  {
    slug: "terrascope",
    title: "TerraScope",
    category: "Data Analytics",
    description:
      "Real estate analytics and valuation dashboard aggregating market data, ML-driven price predictions, and interactive geospatial visualizations.",
    tags: ["Next.js", "D3.js", "Python", "ML"],
    gradient: "from-[#05D9E8]/20 to-[#A06B50]/10",
    borderAccent: "#05D9E8",
    link: "/case-studies/terrascope",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    challenge:
      "Real estate developers needed to visualize highly complex pricing trends across nationwide markets alongside hundreds of thousands of datapoints without browser lag.",
    solution:
      "We built a robust Next.js platform heavily utilizing D3.js and hardware-accelerated WebGL layers for geospatial mapping. The backend leveraged a Python ML prediction model to dynamically evaluate thousands of active properties.",
    impact:
      "The newly deployed dashboard rendered 300K+ data points flawlessly on standard web browsers, empowering the client firm to close properties 12 days faster on average.",
  },
  {
    slug: "pulse-connect",
    title: "Pulse Connect",
    category: "Full Stack",
    description:
      "Enterprise team collaboration platform with real-time messaging, project boards, file sharing, and integrations with 20+ workplace tools.",
    tags: ["Vue.js", "GraphQL", "Docker", "K8s"],
    gradient: "from-[#D1F628]/20 to-[#9A5CB0]/10",
    borderAccent: "#D1F628",
    link: "/case-studies/pulse-connect",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    challenge:
      "The client's internal team of 10,000 employees was split across four disparate chat tools and board management software causing severe workflow fragmentation.",
    solution:
      "We developed an enterprise-grade collaboration hub from scratch. Utilizing GraphQL for efficient multi-tool data fetching and Kubernetes for auto-scaling, the application provided an ultra-responsive, centralized portal for team files and chat.",
    impact:
      "Adopted by 95% of the enterprise within the first month. The consolidation allowed the client to cancel 3 overlapping software licenses, generating immediate high ROI.",
  },
  {
    slug: "quantedge",
    title: "QuantEdge",
    category: "FinTech",
    description:
      "Financial data processing and reporting system handling $2M+ daily transactions with real-time fraud detection and compliance automation.",
    tags: ["Python", "Pandas", "React", "PostgreSQL"],
    gradient: "from-[#01FFA4]/20 to-[#A08B4E]/10",
    borderAccent: "#01FFA4",
    link: "/case-studies/quantedge",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    challenge:
      "Fraud systems running against the global banking APIs were timing out during high-volume trading hours, creating unacceptable risks for the client processing $2M+ daily.",
    solution:
      "We fundamentally rewrote the transaction parsers utilizing highly optimized Python Pandas dataframes hooked into an indexed PostgreSQL cluster to immediately screen anomalous micro-patterns in real-time.",
    impact:
      "Zero-downtime execution for the past 12 months. False-positive fraud flags dropped by 60%, drastically improving the clearance speed for the firm's trading block operations.",
  },
];
