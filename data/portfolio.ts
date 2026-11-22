export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface TeachingSubject {
  id: string;
  title: string;
  level: string;
  badge: string;
  description: string;
  topics: string[];
  enrolledStudents: string;
  icon: string;
}

export interface DemoLecture {
  id: string;
  title: string;
  subject: string;
  duration: string;
  level: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  rating: number;
  tags: string[];
  summary: string;
}

export interface LeadershipInitiative {
  title: string;
  description: string;
  metric: string;
  badge: string;
}

export interface ProjectResource {
  id: string;
  title: string;
  category:
    | "EdTech & LMS"
    | "Lecture Series"
    | "Code & Dev"
    | "Study Materials";
  description: string;
  tags: string[];
  featured: boolean;
  linkText: string;
  linkUrl: string;
  githubUrl?: string;
  downloadUrl?: string;
  previewImage: string;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  institution: string;
  achievement: string;
  avatar: string;
  rating: number;
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export const portfolioData = {
  personal: {
    name: "Kabibur Rahman",
    shortName: "",
    eyebrow: "Educator • EdTech Co-Founder • CSE Undergraduate",
    headline:
      "Transforming Complex Computer Science Concepts Into Intuitive Learning Experiences",
    subheadline:
      "Undergraduate researcher in Computer Science & Engineering at the University of Dhaka and Co-Founder at Studins School. Dedicated to bridging theoretical computing, real-world engineering, and high-impact digital education for thousands of aspiring technologists across Bangladesh.",
    availability:
      "Available for Mentoring, Guest Workshops & EdTech Collaborations",
    location: "Dhaka, Bangladesh",
    email: "Kabibur..cse@gmail.com",
    phone: "+880 1712-345678",
    avatar: "/images/profile.jpg",
    avatarPlaceholderInitials: "KB",
    experienceYears: "5+",
    studentsMentored: "12,000+",
    institutionsRepresented: "University of Dhaka | Studins School",
    resumeUrl: "#contact",
  },

  socialLinks: {
    linkedin: "https://linkedin.com/in/Kabibur-",
    github: "https://github.com/Kabibur-",
    facebook: "https://facebook.com/Kabibur.",
    youtube: "https://youtube.com/@studinsschool",
    studinsSchool: "https://studinsschool.com",
    telegram: "https://t.me/_cse",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Teaching", href: "#teaching" },
    { label: "Studins School", href: "#leadership" },
    { label: "Resources", href: "#projects" },
    { label: "Academics & Skills", href: "#skills" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  quickStats: [
    {
      value: "5+ Years",
      label: "Teaching Experience",
      subtext: "Classrooms, online cohorts & interactive workshops",
      iconName: "GraduationCap",
    },
    {
      value: "12,000+",
      label: "Learners Reached",
      subtext: "Across secondary, higher secondary & university tracks",
      iconName: "Users",
    },
    {
      value: "250+",
      label: "Digital Classes & Notes",
      subtext: "Structured CQ/MCQ guides, slides & recorded modules",
      iconName: "Video",
    },
    {
      value: "98.4%",
      label: "Student Satisfaction",
      subtext: "Consistently rated 5-stars for clarity & depth",
      iconName: "Award",
    },
  ] as StatItem[],

  teaching: {
    philosophy: {
      tag: "Teaching Methodology",
      title: "Pedagogy Built on Clarity, Mental Models & Practical Application",
      description:
        "Every concept is deconstructed to first principles. Whether explaining how pointers manage memory in C, how packets route across autonomous systems in TCP/IP, or simplifying Boolean algebra for HSC ICT, lessons combine relatable analogies, live coding, and visual system diagrams.",
      pillars: [
        {
          title: "First-Principles Conceptual Clarity",
          desc: "Never memorize syntax blindly. We understand the 'Why' behind every protocol, algorithm, and hardware constraint.",
        },
        {
          title: "Interactive Live Problem-Solving",
          desc: "Students actively debug code, formulate test cases, and solve real university admission and board standard problems.",
        },
        {
          title: "Curated Notes & Systematic Question Banks",
          desc: "Color-coded mind maps, step-by-step CQ proofs, and high-yield MCQ shortcuts that maximize exam performance.",
        },
        {
          title: "Continuous 1-on-1 Mentorship",
          desc: "Dedicated doubt-clearing sessions and personalized guidance to overcome learning plateaus.",
        },
      ],
    },
    subjects: [
      {
        id: "hsc-ict",
        title: "Higher Secondary ICT (HSC)",
        level: "Class 11 - 12 & HSC Board / Admission",
        badge: "Flagship Program",
        description:
          "Comprehensive mastery of the national curriculum with deep emphasis on C Programming, HTML/Web Design, Number Systems, and Database Management Systems.",
        topics: [
          "C Programming & Logic Building",
          "Number Systems & Digital Logic Gates",
          "Web Design & HTML Fundamentals",
          "Relational Database Systems (SQL)",
          "Data Communication & Networking",
        ],
        enrolledStudents: "7,500+ Students",
        icon: "BookOpen",
      },
      {
        id: "c-cpp-programming",
        title: "Foundational C & C++ Programming",
        level: "Beginner to Intermediate",
        badge: "Computer Science Core",
        description:
          "Rigorous foundational programming covering memory management, pointer arithmetic, data structures, and algorithmic reasoning from scratch.",
        topics: [
          "Memory Architecture & Pointers",
          "Data Structures (Arrays, Stacks, Queues, Linked Lists)",
          "Recursion & Time Complexity Analysis",
          "File I/O & Modular Code Architecture",
          "Competitive Programming Introduction",
        ],
        enrolledStudents: "3,200+ Students",
        icon: "Code2",
      },
      {
        id: "networking-foundations",
        title: "Computer Networking & CCNA Basics",
        level: "Undergraduate & Certification Track",
        badge: "Specialized Track",
        description:
          "Deep dive into the OSI and TCP/IP stack, IP subnetting, routing protocols (OSPF, RIP), packet analysis using Wireshark, and Cisco Packet Tracer network simulation.",
        topics: [
          "IPv4 & IPv6 Subnetting & VLSM",
          "TCP/IP, UDP, DNS, DHCP, HTTP/HTTPS Protocols",
          "Switching (VLANs, STP) & Routing (Static, OSPF)",
          "Network Security & Firewall Fundamentals",
          "Packet Simulation with Cisco Packet Tracer",
        ],
        enrolledStudents: "1,800+ Students",
        icon: "Network",
      },
      {
        id: "problem-solving",
        title: "Discrete Mathematics & Problem Solving",
        level: "HSC Math & CSE Undergrad",
        badge: "Analytical Reasoning",
        description:
          "Strengthening logical deduction, set theory, graph theory, combinatorics, and algorithmic mindset required for software engineering excellence.",
        topics: [
          "Propositional & Predicate Logic",
          "Set Theory, Relations & Functions",
          "Combinatorics & Pigeonhole Principle",
          "Graph Theory Fundamentals",
          "Proof Techniques & Mathematical Induction",
        ],
        enrolledStudents: "1,400+ Students",
        icon: "Cpu",
      },
    ] as TeachingSubject[],

    demoLectures: [
      {
        id: "lec-c-pointers",
        title:
          "Mastering Pointers & Dynamic Memory in C: Visualized from Hardware Up",
        subject: "C Programming",
        duration: "42 mins",
        level: "Foundational",
        thumbnail: "/images/lecture-pointers.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        views: "18.4K views",
        rating: 4.9,
        tags: ["Memory Layout", "Pointers", "Stack vs Heap", "Live Visuals"],
        summary:
          "A step-by-step visual dissection of memory addresses, pointer arithmetic, dereferencing, and common pitfalls like segmentation faults.",
      },
      {
        id: "lec-subnetting",
        title: "IPv4 Subnetting & VLSM Demystified: Zero-Memorization Method",
        subject: "Computer Networks",
        duration: "55 mins",
        level: "Intermediate",
        thumbnail: "/images/lecture-networking.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        views: "14.2K views",
        rating: 5.0,
        tags: ["IP Addressing", "Subnet Masks", "CIDR", "CCNA Prep"],
        summary:
          "Calculate network addresses, broadcast boundaries, and usable host ranges in under 15 seconds without brute-force binary conversions.",
      },
      {
        id: "lec-logic-gates",
        title: "Logic Gates & Boolean Simplification for HSC ICT CQ 100% Score",
        subject: "HSC ICT",
        duration: "38 mins",
        level: "Board Exam Special",
        thumbnail: "/images/lecture-logic.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        views: "26.8K views",
        rating: 4.9,
        tags: [
          "De Morgan's Laws",
          "K-Maps",
          "NAND Universal Gate",
          "CQ Solved",
        ],
        summary:
          "High-yield walkthrough of recurring creative question patterns with foolproof truth table and circuit verification strategies.",
      },
      {
        id: "lec-sql-joins",
        title: "Relational Databases & SQL Joins Made Crystal Clear",
        subject: "Database Systems",
        duration: "47 mins",
        level: "Beginner-Friendly",
        thumbnail: "/images/lecture-sql.jpg",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        views: "11.7K views",
        rating: 4.8,
        tags: [
          "Inner Join",
          "Left Join",
          "ER Diagrams",
          "Live Query Execution",
        ],
        summary:
          "Visual Venn diagram analogies matched with real SQL queries on relational schemas, explaining normalization and foreign key constraints.",
      },
    ] as DemoLecture[],
  },

  leadership: {
    role: "Co-Founder & Chief Academic Officer",
    organization: "Studins School",
    tagline:
      "Building the next generation of accessible, high-standard digital education in Bangladesh",
    overview:
      "As a Co-Founder of Studins School, I lead academic curriculum engineering, faculty mentorship, and digital pedagogy design. Studins School was established to eliminate the barrier of expensive private tutoring by providing high-fidelity digital courses, interactive problem banks, and mentorship cohorts to students nationwide.",
    stats: [
      { value: "25k+", label: "Community Members" },
      { value: "40+", label: "Instructors & TAs Mentored" },
      { value: "15+", label: "Complete Course Modules" },
      { value: "99.1%", label: "Uptime on Learning Portal" },
    ],
    responsibilities: [
      {
        title: "Curriculum & Syllabus Architecture",
        desc: "Designed structured 12-week and 24-week learning roadmaps tailored to the National Curriculum (NCTB) and competitive university admission exams.",
      },
      {
        title: "Digital Pedagogical Innovation",
        desc: "Pioneered animated visual learning slides, real-time code sandboxes for student practice, and automated MCQ diagnostic evaluations.",
      },
      {
        title: "Academic Operations & Quality Assurance",
        desc: "Trained and mentored 40+ teaching assistants to conduct rigorous doubt-clearing sessions and maintain empathetic student relations.",
      },
      {
        title: "LMS Platform Strategy",
        desc: "Collaborated directly with software engineering teams to specify LMS feature roadmaps: progress tracking, lecture notes repository, and attendance analytics.",
      },
    ],
    initiatives: [
      {
        title: "Free HSC ICT Open Access Initiative",
        description:
          "Released 80+ high-definition lecture notes and solution guides completely free, supporting under-resourced students in rural districts.",
        metric: "50,000+ Downloads",
        badge: "Social Impact",
      },
      {
        title: "CodeStart: First Steps into Software Engineering",
        description:
          "A 4-week weekend bootcamp introducing secondary school students to computational thinking, algorithms, and practical web coding.",
        metric: "800+ Graduates",
        badge: "Bootcamp",
      },
      {
        title: "Model Test & Real-Time Exam Simulator",
        description:
          "A timed exam platform simulating national board and DU admission constraints with instant automated feedback and percentile ranks.",
        metric: "15,000+ Tests Taken",
        badge: "Technology",
      },
    ] as LeadershipInitiative[],
  },

  projects: [
    {
      id: "studins-portal",
      title: "Studins School Student Learning Hub",
      category: "EdTech & LMS",
      description:
        "A full-featured student portal featuring course video streaming, chapter-wise slide downloads, interactive quiz assessments, and performance dashboards.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "LMS"],
      featured: true,
      linkText: "Visit Platform",
      linkUrl: "https://studinsschool.com",
      previewImage: "/images/project-studins.jpg",
      metrics: "Active daily users across Bangladesh",
    },
    {
      id: "hsc-ict-cq-bank",
      title: "Complete HSC ICT Question Bank & Model Solutions",
      category: "Study Materials",
      description:
        "Digital interactive repository of 500+ board exam questions, categorized by chapter with color-annotated step-by-step solutions and common error alerts.",
      tags: [
        "Interactive PDF",
        "Curriculum Guide",
        "Board Exam",
        "Open Access",
      ],
      featured: true,
      linkText: "View Resource",
      linkUrl: "#contact",
      downloadUrl: "#",
      previewImage: "/images/project-ict-bank.jpg",
      metrics: "18,000+ Student Downloads",
    },
    {
      id: "c-visualizer-sandbox",
      title: "C Memory & Pointer Execution Sandbox",
      category: "Code & Dev",
      description:
        "An educational web tool designed to help novice programmers see how variables, arrays, pointers, and memory blocks update step-by-step in execution time.",
      tags: ["React", "WebAssembly", "Data Structures", "Visualization"],
      featured: true,
      linkText: "Live Demo",
      linkUrl: "https://github.com/Kabibur-",
      githubUrl: "https://github.com/Kabibur-",
      previewImage: "/images/project-c-visualizer.jpg",
      metrics: "Used in live classroom demonstrations",
    },
    {
      id: "ccna-lab-topologies",
      title: "Cisco Packet Tracer Enterprise Lab Topologies",
      category: "Code & Dev",
      description:
        "Comprehensive lab repository containing 15+ configured network topologies: multi-area OSPF, inter-VLAN routing, NAT, ACL filtering, and DHCP snooping.",
      tags: ["Cisco Packet Tracer", "CCNA", "Network Architecture", "Routing"],
      featured: false,
      linkText: "Explore Labs",
      linkUrl: "https://github.com/Kabibur-",
      githubUrl: "https://github.com/Kabibur-",
      previewImage: "/images/project-network-lab.jpg",
      metrics: "15+ Production-grade simulation scenarios",
    },
    {
      id: "video-masterclass-series",
      title: "HSC ICT 100-Day Mastery Video Series",
      category: "Lecture Series",
      description:
        "A 60-episode curated video series breaking down every chapter of ICT with crisp graphics, animations, and previous 10 years of board question solutions.",
      tags: ["YouTube", "Video Curriculum", "Pedagogy", "Bengali"],
      featured: false,
      linkText: "Watch Playlist",
      linkUrl: "https://youtube.com/@studinsschool",
      previewImage: "/images/project-youtube-series.jpg",
      metrics: "Over 200,000 combined organic views",
    },
    {
      id: "du-admission-ict-primer",
      title: "University Admission ICT & Math Quick Revision Guide",
      category: "Study Materials",
      description:
        "High-yield formula handbook and shortcut techniques for Dhaka University (DU) Science unit admission test preparation.",
      tags: ["Admission Test", "DU Prep", "Formula Sheet", "Exam Shortcuts"],
      featured: false,
      linkText: "Download Guide",
      linkUrl: "#contact",
      downloadUrl: "#",
      previewImage: "/images/project-du-guide.jpg",
      metrics: "Distributed to 4,000+ candidates",
    },
  ] as ProjectResource[],

  education: {
    degrees: [
      {
        degree: "B.Sc. in Computer Science & Engineering (CSE)",
        institution: "University of Dhaka (DU)",
        period: "2022 – Present",
        location: "Dhaka, Bangladesh",
        description:
          "Rigorous undergraduate engineering program emphasizing theoretical computing foundations, algorithms, systems design, networking, and software engineering principles.",
        coursework: [
          "Data Structures & Algorithms",
          "Computer Networks & Data Communication",
          "Operating Systems & Systems Programming",
          "Database Management Systems",
          "Object-Oriented Programming (Java / C++)",
          "Discrete Mathematics & Automata Theory",
        ],
        badge: "Undergraduate Scholar",
      },
      {
        degree: "Higher Secondary Certificate (HSC) – Science",
        institution: "Top Tier College, Bangladesh",
        period: "Completed with Golden GPA 5.00",
        location: "Bangladesh",
        description:
          "Focused on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT). Consistently topped institutional academic rankings.",
        coursework: ["Higher Mathematics", "Physics", "Chemistry", "ICT"],
        badge: "Golden GPA 5.00",
      },
    ],
    certifications: [
      {
        title: "Cisco Certified Network Associate (CCNA) Curriculum",
        issuer: "Cisco Networking Academy",
        date: "2024",
        topics:
          "Enterprise Networking, Security, IP Services, Routing & Switching",
      },
      {
        title: "Modern Full-Stack Web Architecture & TypeScript",
        issuer: "Industry Standard Specialization",
        date: "2024",
        topics: "React, Next.js App Router, Tailwind CSS, REST & GraphQL APIs",
      },
      {
        title: "Pedagogy & Digital Teaching Excellence",
        issuer: "EdTech Leadership Forum",
        date: "2023",
        topics:
          "Instructional Design, Formative Assessment, Student Engagement",
      },
    ],
    skillCategories: [
      {
        title: "Teaching & Academic Pedagogy",
        icon: "BookOpenCheck",
        description:
          "Methods honed over 5+ years instructing high school and undergraduate students.",
        skills: [
          { name: "HSC ICT Curriculum (NCTB)", level: 98, note: "Mastery" },
          {
            name: "Concept Simplification & Analogies",
            level: 96,
            note: "Expert",
          },
          {
            name: "Creative Question (CQ) Structuring",
            level: 95,
            note: "Expert",
          },
          {
            name: "Live Coding & Interactive Instruction",
            level: 92,
            note: "Advanced",
          },
          {
            name: "Curriculum Architecture & Syllabus",
            level: 90,
            note: "Advanced",
          },
        ],
      },
      {
        title: "Programming & Computer Science",
        icon: "Terminal",
        description: "Core programming languages and engineering fundamentals.",
        skills: [
          { name: "C & C++ Programming", level: 92, note: "Expert" },
          { name: "Data Structures & Algorithms", level: 88, note: "Advanced" },
          { name: "Python", level: 85, note: "Proficient" },
          { name: "JavaScript & TypeScript", level: 86, note: "Proficient" },
          {
            name: "SQL & Relational Schema Design",
            level: 84,
            note: "Proficient",
          },
        ],
      },
      {
        title: "Networking & Infrastructure",
        icon: "Server",
        description:
          "Network simulation, protocols, and systems administration.",
        skills: [
          { name: "TCP/IP & OSI Architecture", level: 90, note: "Advanced" },
          { name: "IPv4/IPv6 Subnetting & VLSM", level: 94, note: "Expert" },
          {
            name: "Cisco Packet Tracer Simulations",
            level: 90,
            note: "Advanced",
          },
          { name: "Linux OS & Bash Scripting", level: 82, note: "Proficient" },
          { name: "Wireshark Packet Analysis", level: 80, note: "Competent" },
        ],
      },
      {
        title: "Modern Web & Digital Tools",
        icon: "Laptop",
        description:
          "Modern web tools, content creation, and collaborative software.",
        skills: [
          { name: "Next.js & React", level: 85, note: "Proficient" },
          { name: "Tailwind CSS & Responsive UI", level: 92, note: "Expert" },
          {
            name: "Git, GitHub & Version Control",
            level: 88,
            note: "Advanced",
          },
          {
            name: "OBS Studio & Video Production",
            level: 90,
            note: "Advanced",
          },
          {
            name: "Figma & Visual Presentation",
            level: 82,
            note: "Proficient",
          },
        ],
      },
    ] as SkillCategory[],
  },

  testimonials: [
    {
      id: "t1",
      quote:
        " Bhai's C programming lectures completely transformed my fear of coding into a genuine passion. Before his classes, memory allocation and pointers felt impossible. He explains every bit and byte with crystal clarity!",
      name: "Tanvir Ahmed",
      role: "HSC ICT Student (Now at BUET CSE)",
      institution: "Notre Dame College",
      achievement: "GPA 5.00 in Board Exam & BUET Top 150",
      avatar: "/images/avatars/student-1.jpg",
      rating: 5,
    },
    {
      id: "t2",
      quote:
        "The question bank and lecture notes provided at Studins School under  Bhai's leadership are unparalleled. You don't just memorize answers; you understand the underlying concepts so well that no question in the exam hall can surprise you.",
      name: "Sumaiya Jahan",
      role: "HSC Science Candidate",
      institution: "Viqarunnisa Noon College",
      achievement: "100/100 in ICT Pre-Test & Board Merit",
      avatar: "/images/avatars/student-2.jpg",
      rating: 5,
    },
    {
      id: "t3",
      quote:
        "Kabibur has that rare gift of being both a rigorous computer scientist and an extraordinarily patient educator. His Cisco networking workshop for our junior batch simplified complex routing protocols that standard textbooks make daunting.",
      name: "Mahir Faysal",
      role: "CSE Undergraduate Colleague",
      institution: "University of Dhaka",
      achievement: "Collaborator on Studins School Lab Modules",
      avatar: "/images/avatars/colleague-1.jpg",
      rating: 5,
    },
    {
      id: "t4",
      quote:
        "As a parent, I was amazed at how motivated my son became after joining 's classes. He stopped cramming and began building actual mini-projects.  Sir is not just a teacher, but a mentor who guides students towards real careers in tech.",
      name: "Dr. Rafiqul Islam",
      role: "Guardian & University Professor",
      institution: "Dhaka",
      achievement: "Son secured DU Admission",
      avatar: "/images/avatars/parent-1.jpg",
      rating: 5,
    },
  ] as Testimonial[],

  milestones: [
    {
      year: "2024",
      title: "Co-Founded Studins School EdTech Platform",
      organization: "Studins School",
      description:
        "Launched nationwide platform serving over 25,000 registered community learners with 15+ comprehensive courses.",
      badge: "EdTech Milestone",
    },
    {
      year: "2023",
      title: "10,000+ Students Mentored Milestone",
      organization: "Academic Outreach",
      description:
        "Crossed 10,000 active students mentored through offline coaching, college guest workshops, and live online masterclasses.",
      badge: "Community Impact",
    },
    {
      year: "2022",
      title: "Enrolled in B.Sc. in CSE at University of Dhaka",
      organization: "University of Dhaka",
      description:
        "Secured competitive merit placement at Bangladesh's premier institution for Computer Science and Engineering.",
      badge: "Academic Excellence",
    },
    {
      year: "2021",
      title: "Golden GPA 5.00 in HSC Examination",
      organization: "Board of Intermediate & Secondary Education",
      description:
        "Awarded national academic distinction with perfect marks across Science and Information Technology disciplines.",
      badge: "National Merit",
    },
  ] as Milestone[],

  faqs: [
    {
      question: "What courses and batches does  Bhai currently teach?",
      answer:
        "I primarily teach HSC ICT (covering C Programming, Number Systems, Web Design, and Database), Foundational C/C++ Programming for university beginners, and Computer Networking & CCNA fundamentals through Studins School and private mentorship cohorts.",
    },
    {
      question:
        "How can I enroll in Studins School classes or access study materials?",
      answer:
        "You can visit studinsschool.com to view active batches, download free open-access lecture notes and question banks, or submit an inquiry using the contact form below for upcoming cohort schedules.",
    },
    {
      question: "Are 1-on-1 consultation or mentorship sessions available?",
      answer:
        "Yes! I offer dedicated 1-on-1 sessions for students needing personalized academic roadmaps, university CSE transition guidance, or debugging help. You can schedule a session via the contact section below.",
    },
    {
      question:
        "Can colleges or tech clubs invite you for workshops and guest lectures?",
      answer:
        "Absolutely. I regularly conduct hands-on interactive workshops on 'First Steps into C Programming', 'Demystifying Computer Networks with Cisco Packet Tracer', and 'Ace HSC ICT with Logic'. Please reach out with the event details.",
    },
  ],
};
