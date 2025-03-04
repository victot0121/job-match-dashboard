import type { Job } from "@/types"

// Mock API function to fetch jobs
export async function fetchJobs(): Promise<Job[]> {
  // In a real app, this would be an API call
  // For this demo, we'll simulate a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          "id": 1,
          "title": "Frontend Developer",
          "company": "Tech Corp",
          "location": "Remote",
          "salary": "$70,000 - $90,000",
          "requiredSkills": ["React", "Next.js", "JavaScript", "Tailwind CSS"],
          "matchScore": 85
        },
        {
          "id": 2,
          "title": "UI Engineer",
          "company": "DesignPro",
          "location": "New York, USA",
          "salary": "$80,000 - $100,000",
          "requiredSkills": ["Figma", "React", "CSS"],
          "matchScore": 70
        },
        {
          "id": 3,
          "title": "Full Stack Developer",
          "company": "WebSolutions",
          "location": "San Francisco, USA",
          "salary": "$90,000 - $120,000",
          "requiredSkills": ["React", "Node.js", "MongoDB", "Express"],
          "matchScore": 60
        },
        {
          "id": 4,
          "title": "React Native Developer",
          "company": "MobileApps Inc",
          "location": "Remote",
          "salary": "$85,000 - $110,000",
          "requiredSkills": ["React Native", "JavaScript", "TypeScript", "Redux"],
          "matchScore": 45
        },
        {
          "id": 5,
          "title": "Senior Frontend Engineer",
          "company": "Enterprise Solutions",
          "location": "Austin, USA",
          "salary": "$110,000 - $140,000",
          "requiredSkills": ["React", "TypeScript", "GraphQL", "Next.js", "Testing"],
          "matchScore": 65
        },
        {
          "id": 6,
          "title": "JavaScript Developer",
          "company": "StartupX",
          "location": "Remote",
          "salary": "$65,000 - $85,000",
          "requiredSkills": ["JavaScript", "HTML", "CSS", "React"],
          "matchScore": 90
        },
        {
          "id": 7,
          "title": "Backend Developer",
          "company": "Data Systems",
          "location": "Chicago, USA",
          "salary": "$95,000 - $115,000",
          "requiredSkills": ["Node.js", "Express", "MongoDB", "GraphQL"],
          "matchScore": 80
        },
        {
          "id": 8,
          "title": "Software Engineer",
          "company": "Tech Giants",
          "location": "Seattle, USA",
          "salary": "$100,000 - $130,000",
          "requiredSkills": ["JavaScript", "TypeScript", "AWS", "Docker"],
          "matchScore": 75
        },
        {
          "id": 9,
          "title": "Mobile App Developer",
          "company": "AppWorld",
          "location": "Remote",
          "salary": "$80,000 - $100,000",
          "requiredSkills": ["React Native", "Swift", "Kotlin"],
          "matchScore": 55
        },
        {
          "id": 10,
          "title": "Frontend Engineer",
          "company": "E-Commerce Inc",
          "location": "New York, USA",
          "salary": "$90,000 - $115,000",
          "requiredSkills": ["React", "Vue.js", "CSS", "Webpack"],
          "matchScore": 85
        },
        {
          "id": 11,
          "title": "DevOps Engineer",
          "company": "Cloud Experts",
          "location": "Remote",
          "salary": "$110,000 - $140,000",
          "requiredSkills": ["AWS", "Kubernetes", "Terraform", "CI/CD"],
          "matchScore": 70
        },
        {
          "id": 12,
          "title": "Full Stack Engineer",
          "company": "InnovateTech",
          "location": "Los Angeles, USA",
          "salary": "$85,000 - $105,000",
          "requiredSkills": ["React", "Django", "PostgreSQL"],
          "matchScore": 75
        },
        {
          "id": 13,
          "title": "Lead React Developer",
          "company": "NextGen Software",
          "location": "San Francisco, USA",
          "salary": "$120,000 - $150,000",
          "requiredSkills": ["React", "Redux", "TypeScript", "GraphQL"],
          "matchScore": 90
        },
        {
          "id": 14,
          "title": "AI Engineer",
          "company": "AI Solutions",
          "location": "Boston, USA",
          "salary": "$130,000 - $160,000",
          "requiredSkills": ["Python", "TensorFlow", "Machine Learning"],
          "matchScore": 65
        },
        {
          "id": 15,
          "title": "Web Developer",
          "company": "Creative Digital",
          "location": "Remote",
          "salary": "$60,000 - $80,000",
          "requiredSkills": ["HTML", "CSS", "JavaScript", "WordPress"],
          "matchScore": 85
        },
        {
          "id": 16,
          "title": "Cloud Engineer",
          "company": "CloudOps",
          "location": "Austin, USA",
          "salary": "$105,000 - $135,000",
          "requiredSkills": ["AWS", "Docker", "Kubernetes"],
          "matchScore": 80
        },
        {
          "id": 17,
          "title": "Security Engineer",
          "company": "CyberSafe",
          "location": "Washington D.C., USA",
          "salary": "$115,000 - $145,000",
          "requiredSkills": ["Cybersecurity", "Python", "Network Security"],
          "matchScore": 75
        },
        {
          "id": 18,
          "title": "React Frontend Developer",
          "company": "Innovative Tech",
          "location": "Remote",
          "salary": "$95,000 - $125,000",
          "requiredSkills": ["React", "Tailwind CSS", "TypeScript"],
          "matchScore": 80
        },
        {
          "id": 19,
          "title": "Blockchain Developer",
          "company": "CryptoTech",
          "location": "Remote",
          "salary": "$110,000 - $140,000",
          "requiredSkills": ["Solidity", "Ethereum", "Web3.js"],
          "matchScore": 70
        },
        {
          "id": 20,
          "title": "Python Backend Developer",
          "company": "Data AI",
          "location": "San Diego, USA",
          "salary": "$90,000 - $120,000",
          "requiredSkills": ["Python", "Django", "REST API", "PostgreSQL"],
          "matchScore": 78
        }
      ])
    }, 1000)
  })
}

