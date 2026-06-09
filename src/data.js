export const data = {
  name: "Samuel Asamnew",
  title: "Software Engineer",
  roles: ["Backend Developer", "Full Stack Developer", "Banking Systems Engineer"],
  email: "samuelasamnewmamo@gmail.com",
  phone: "+251 949 384 998",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/Samuel-Asamnew", // update with your real handle
  linkedin: "https://www.linkedin.com/in/samuel-asamnew-mamo-80245833b", // update with your real profile
  summary: "Software Engineer and IT professional with hands-on experience in enterprise software development, banking integrations, backend systems, and full-stack application development. Proven track record in Java Spring Boot, React, REST API development, and system integration.",

  skills: [
    { name: "Java / Spring Boot", level: 95, category: "Backend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "REST API Design", level: 92, category: "Backend" },
    { name: "Laravel", level: 70, category: "Backend" },
    { name: "ESB / Integration", level: 88, category: "Integration" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "Oracle DB", level: 80, category: "Database" },
    { name: "ERPNext / Python", level: 60, category: "ERP" },
  ],

  experience: [
    {
      role: "Junior IT Officer",
      company: "Gadaa Bank S.C.",
      period: "April 2024 – Present",
      type: "Full-time",
      highlights: [
        "Developed ISO 20022 Message Conversion System for cross-border banking",
        "Built School Payment System integrated with core banking platforms",
        "Designed and delivered IFRS9 System using Java Spring Boot & React",
        "Built Signature Application System for banking operations",
        "Led Derash payment integration and other banking system integrations",
        "Designed RESTful APIs and backend services supporting critical banking applications",
      ],
      tech: ["Java", "Spring Boot", "React", "REST API", "ESB","Oracle DB","PostgreSQL", "Laravel"],
    },
    {
      role: "Backend Developer",
      company: "MSS Software PLC",
      period: "Prior Experience",
      type: "Full-time",
      highlights: [
        "Delivered government system integrations for Ministry of Revenue projects",
        "Designed and developed backend services and integration solutions",
        "Participated in enterprise system implementation and API integrations",
      ],
      tech: ["Laravel", "REST API", "Mysql", "Integration"],
    },

  ],

  projects: [
    {
      title: "National ID Integration",
      desc: "Worked as a frontend (React) developer on a project integrating national ID verification into a core banking system. Built user interfaces for customer onboarding and developed secure APIs for ID validation. The solution streamlined customer registration, enhanced security, and ensured compliance with national regulations.",
      tech: ["React", "Java", "MySQL", "REST API", "Integration"],
      link: "https://fayda.gadaabank.com.et/publicfayda/",
      highlight: true,
    },
    {
      title: "ISO 20022 Message Conversion System",
      desc: "Cross-border banking message conversion system compliant with ISO 20022 international standard for financial data exchange.",
      tech: ["Java", "Spring Boot", "REST API"],
      highlight: true,
    },
    {
      title: "IFRS9 Banking System",
      desc: "Financial system for IFRS9 compliance — Expected Credit Loss provisioning and reporting for banking portfolios.",
      tech: ["Java", "Spring Boot", "React", "Oracle DB"],
      highlight: true,
    },
    {
      title: "School Payment System",
      desc: "End-to-end school fee payment system integrated with Gadaa Bank's core banking platform for seamless transactions.",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      highlight: false,
    },
    {
      title: "Derash Payment Integration",
      desc: "Payment gateway integration enabling Derash digital wallet transactions within the bank's ecosystem.",
      tech: ["Java", "REST API", "ESB"],
      highlight: false,
    },
    {
      title: "Signature Application System",
      desc: "Digital signature management system for banking document workflows and authorization processes.",
      tech: ["Java", "Spring Boot", "React"],
      highlight: false,
    },
    {
      title: "Ministry of Revenue Integration",
      desc: "Government system integration for Ministry of Revenue — data exchange pipelines and backend API services.",
      tech: ["Java", "ESB", "REST API"],
      highlight: false,
    },
  ],

  education: {
    degree: "BSc in Information Technology",
    school: "University of Gondar",
    gpa: "3.82 / 4.00",
  },

  certifications: [
    { name: "Job Readiness", issuer: "Dereja Academy", url: "" },
    { name: "Fundamentals of Programming", issuer: "Udacity", url: "https://www.udacity.com/certificate/e/600059fc-d09b-11ef-8bb8-cb0c72f94dc7" },
    { name: "Data Analysis Fundamentals", issuer: "Udacity", url: "https://www.udacity.com/certificate/e/c9d792aa-0a33-11f1-8af2-67b4cbf0dc19" },
    { name: "AI Fundamentals", issuer: "Udacity", url: "https://www.udacity.com/certificate/lp/74f53bd1-68dd-49dd-8eeb-59263f5d60fc" },
  ],

  languages: [
    { lang: "Amharic", level: "Fluent" },
    { lang: "English", level: "Professional" },
    { lang: "Afan Oromo", level: "Intermediate" },
  ],
};
