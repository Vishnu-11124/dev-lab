import { Developer, EmployeeDetails, Product } from "@/types/type";

export const developers: Developer[] = [
  {
    devId: "DEV-001",
    name: "Aarav Mehta",
    email: "aarav.mehta@techsolutions.dev",
    phone: "+1 555-0101",
    role: "Frontend Developer",
    experience: 4,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    recentWorks: [
      {
        title: "Retail Admin Dashboard",
        description:
          "Built a responsive analytics dashboard with live sales charts.",
      },
      {
        title: "Design System Library",
        description:
          "Created a reusable component library used across 5 products.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    devId: "DEV-002",
    name: "Sofia Martinez",
    email: "sofia.martinez@techsolutions.dev",
    phone: "+1 555-0102",
    role: "Backend Developer",
    experience: 6,
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    recentWorks: [
      {
        title: "Payments API",
        description:
          "Designed a REST API handling secure checkout and refunds.",
      },
      {
        title: "Order Queue Service",
        description:
          "Added Redis-based job queues that cut processing time by 40%.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    devId: "DEV-003",
    name: "Liam O’Connor",
    email: "liam.oconnor@techsolutions.dev",
    phone: "+1 555-0103",
    role: "Full Stack Developer",
    experience: 5,
    skills: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"],
    recentWorks: [
      {
        title: "Customer Support Portal",
        description:
          "Built a ticketing system with real-time chat and email alerts.",
      },
      {
        title: "Inventory Tracker",
        description:
          "Delivered a full-stack app with barcode scanning and reports.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    devId: "DEV-004",
    name: "Priya Nair",
    email: "priya.nair@techsolutions.dev",
    phone: "+1 555-0104",
    role: "Frontend Developer",
    experience: 3,
    skills: ["Vue.js", "Nuxt", "JavaScript", "SCSS", "Figma"],
    recentWorks: [
      {
        title: "Travel Booking UI",
        description:
          "Implemented a multi-step booking flow with accessible forms.",
      },
      {
        title: "Marketing Website Revamp",
        description:
          "Rebuilt landing pages and improved Lighthouse scores above 95.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=45",
  },
  {
    devId: "DEV-005",
    name: "Daniel Kim",
    email: "daniel.kim@techsolutions.dev",
    phone: "+1 555-0105",
    role: "Backend Developer",
    experience: 8,
    skills: ["Java", "Spring Boot", "MySQL", "Kafka", "Kubernetes"],
    recentWorks: [
      {
        title: "Banking Microservices",
        description:
          "Split a monolith into event-driven microservices on Kubernetes.",
      },
      {
        title: "Fraud Alert Engine",
        description:
          "Built a streaming service that flags suspicious transactions.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=14",
  },
  {
    devId: "DEV-006",
    name: "Emma Johansson",
    email: "emma.johansson@techsolutions.dev",
    phone: "+1 555-0106",
    role: "Full Stack Developer",
    experience: 7,
    skills: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Vercel"],
    recentWorks: [
      {
        title: "SaaS Billing Platform",
        description:
          "Shipped subscription billing, invoices and a customer portal.",
      },
      {
        title: "Appointment Scheduler",
        description:
          "Built a booking app with calendar sync and SMS reminders.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    devId: "DEV-007",
    name: "Omar Hassan",
    email: "omar.hassan@techsolutions.dev",
    phone: "+1 555-0107",
    role: "Frontend Developer",
    experience: 5,
    skills: ["Angular", "RxJS", "TypeScript", "Jest", "Cypress"],
    recentWorks: [
      {
        title: "HR Management Portal",
        description:
          "Developed role-based screens for payroll and leave tracking.",
      },
      {
        title: "E2E Test Suite",
        description:
          "Introduced Cypress tests that caught regressions before release.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    devId: "DEV-008",
    name: "Chloe Dubois",
    email: "chloe.dubois@techsolutions.dev",
    phone: "+1 555-0108",
    role: "Backend Developer",
    experience: 4,
    skills: ["Python", "Django", "FastAPI", "Celery", "AWS Lambda"],
    recentWorks: [
      {
        title: "Document Processing API",
        description:
          "Created an async pipeline that extracts data from uploaded PDFs.",
      },
      {
        title: "Notification Service",
        description:
          "Built a serverless service sending email and push notifications.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=48",
  },
  {
    devId: "DEV-009",
    name: "Rahul Verma",
    email: "rahul.verma@techsolutions.dev",
    phone: "+1 555-0109",
    role: "Full Stack Developer",
    experience: 9,
    skills: ["React", "Express", "MongoDB", "Socket.IO", "CI/CD"],
    recentWorks: [
      {
        title: "Logistics Tracking App",
        description:
          "Delivered live shipment tracking with maps and driver updates.",
      },
      {
        title: "DevOps Pipeline Setup",
        description: "Automated builds and deployments with GitHub Actions.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=33",
  },
  {
    devId: "DEV-010",
    name: "Isabella Rossi",
    email: "isabella.rossi@techsolutions.dev",
    phone: "+1 555-0110",
    role: "Frontend Developer",
    experience: 2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Framer Motion"],
    recentWorks: [
      {
        title: "Portfolio Builder",
        description:
          "Built a drag-and-drop portfolio editor with animated previews.",
      },
      {
        title: "Landing Page Kit",
        description:
          "Produced responsive landing page templates for small businesses.",
      },
    ],
    image: "https://i.pravatar.cc/300?img=49",
  },
];

export const employees: EmployeeDetails[] = [
  {
    id: 1,
    fullName: "Arjun Menon",
    email: "arjun.menon@example.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 2,
    location: "Kochi, India",
    salary: 450000,
    status: "Active",
  },
  {
    id: 2,
    fullName: "Priya Sharma",
    email: "priya.sharma@example.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: 4,
    location: "Bengaluru, India",
    salary: 750000,
    status: "Active",
  },
  {
    id: 3,
    fullName: "Rahul Nair",
    email: "rahul.nair@example.com",
    role: "Full Stack Developer",
    department: "Engineering",
    experience: 3,
    location: "Thiruvananthapuram, India",
    salary: 600000,
    status: "Active",
  },
  {
    id: 4,
    fullName: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: 3,
    location: "Hyderabad, India",
    salary: 550000,
    status: "Active",
  },
  {
    id: 5,
    fullName: "Vikram Patel",
    email: "vikram.patel@example.com",
    role: "DevOps Engineer",
    department: "Cloud Operations",
    experience: 5,
    location: "Pune, India",
    salary: 900000,
    status: "Active",
  },
  {
    id: 6,
    fullName: "Ananya Krishnan",
    email: "ananya.krishnan@example.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    experience: 2,
    location: "Chennai, India",
    salary: 420000,
    status: "Active",
  },
  {
    id: 7,
    fullName: "Karthik Rao",
    email: "karthik.rao@example.com",
    role: "Data Analyst",
    department: "Data & Analytics",
    experience: 3,
    location: "Mumbai, India",
    salary: 650000,
    status: "Active",
  },
  {
    id: 8,
    fullName: "Meera Thomas",
    email: "meera.thomas@example.com",
    role: "Project Manager",
    department: "Management",
    experience: 7,
    location: "Kochi, India",
    salary: 1200000,
    status: "Active",
  },
  {
    id: 9,
    fullName: "Aditya Verma",
    email: "aditya.verma@example.com",
    role: "Cybersecurity Analyst",
    department: "Security",
    experience: 4,
    location: "Noida, India",
    salary: 800000,
    status: "On Leave",
  },
  {
    id: 10,
    fullName: "Diya Joseph",
    email: "diya.joseph@example.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: 2,
    location: "Coimbatore, India",
    salary: 400000,
    status: "Active",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Nova X1 Pro",
    price: 74999,
    description: "6.7-inch AMOLED display, flagship chipset, 50MP triple camera and 5000mAh battery with fast charging.",
    image: "https://picsum.photos/seed/phone1/400/400",
  },
  {
    id: 2,
    name: "Aura S24",
    price: 59999,
    description: "Slim aluminium body with a 120Hz display, 12GB RAM and an all-day battery for heavy users.",
    image: "https://picsum.photos/seed/phone2/400/400",
  },
  {
    id: 3,
    name: "Pulse Lite 5G",
    price: 17999,
    description: "Affordable 5G phone with a smooth 90Hz screen, 8GB RAM and a clean, lightweight interface.",
    image: "https://picsum.photos/seed/phone3/400/400",
  },
  {
    id: 4,
    name: "Zenith Ultra",
    price: 109999,
    description: "Premium titanium frame, 200MP camera system, 1TB storage and a stunning 2K LTPO display.",
    image: "https://picsum.photos/seed/phone4/400/400",
  },
  {
    id: 5,
    name: "Orbit M7",
    price: 23999,
    description: "Mid-range performer with a 64MP camera, stereo speakers and 67W rapid charging.",
    image: "https://picsum.photos/seed/phone5/400/400",
  },
  {
    id: 6,
    name: "Flux Fold 2",
    price: 139999,
    description: "Foldable design with a 7.6-inch inner screen, multitasking mode and a sleek hinge.",
    image: "https://picsum.photos/seed/phone6/400/400",
  },
  {
    id: 7,
    name: "Echo A15",
    price: 11999,
    description: "Budget-friendly everyday phone with a large 6.6-inch display and a 6000mAh long-lasting battery.",
    image: "https://picsum.photos/seed/phone7/400/400",
  },
  {
    id: 8,
    name: "Vertex Gaming Z",
    price: 42999,
    description: "Built for gamers with a 144Hz display, vapor cooling, shoulder triggers and 16GB RAM.",
    image: "https://picsum.photos/seed/phone8/400/400",
  },
  {
    id: 9,
    name: "Lumen Camera Edition",
    price: 54999,
    description: "Photography-focused phone with a 1-inch sensor, optical zoom and pro video modes.",
    image: "https://picsum.photos/seed/phone9/400/400",
  },
  {
    id: 10,
    name: "Breeze Mini",
    price: 31999,
    description: "Compact 5.9-inch flagship that fits one-handed use without compromising on power.",
    image: "https://picsum.photos/seed/phone10/400/400",
  },
  {
    id: 11,
    name: "Atlas Rugged 5G",
    price: 36999,
    description: "Water, dust and drop-resistant body with a bright display and a massive 8000mAh battery.",
    image: "https://picsum.photos/seed/phone11/400/400",
  },
  {
    id: 12,
    name: "Prime Edge 8",
    price: 27999,
    description: "Curved AMOLED screen, 108MP camera, in-display fingerprint sensor and 5G support.",
    image: "https://picsum.photos/seed/phone12/400/400",
  },
];