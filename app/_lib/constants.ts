export const techCardsItems = [
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "NodeJS",
    description: "Backend",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#599636]/30",
  },
  {
    name: "Prisma",
    description: "ORM",
    imageUrl: "/imgs/logos/prisma.svg",
    bgColor: "bg-[#0C344B]/20",
  },
];

export const portfolioProjects = [
  {
    id: "talkEase",
    heading: "Talk Ease",
    subheading:
      "Learn Languages Effortlessly with Secure, Personalized Learning",
    description:
      "A modern language learning platform with all essential functionalities. It includes features like secure user authentication with Clerk, personalized profile management, subscription plan selection, progress tracking, and engaging language courses. The application is developed with NextJs and TypeScript.",
    imageUrl: "/imgs/projects/talkEase.png",
    techStack: [
      "TypeScript",
      "NextJs",
      "TailwindCSS",
      "shadcn/ui",
      "Axios",
      "zustand",
      "stripe",
      "clerk-auth",
    ],
    liveDemoUrl: "talk-ease-psi.vercel.app",
    sourceCodeUrl: "https://github.com/Abdullah-FSWD/TalkEase",
  },
  {
    id: "lms",
    heading: "Learning Management System (LMS)",
    subheading: " A Role-Based Learning Platform for Teachers and Students.",
    description:
      "A responsive Learning Management System (LMS) platform with role-based features for Teachers and Students. It includes course creation, content delivery, progress tracking, and interactive assessments. The application ensures seamless functionality and an intuitive user experience across all devices.",
    imageUrl: "/imgs/projects/lms.png",
    techStack: [
      "TypeScript",
      "Next",
      "MongoDB",
      "TailwindCSS",
      "shadcn/ui",
      "Axios",
      "Prisma",
      "zod",
      "clerk-auth",
    ],
    liveDemoUrl: "lms-abdullah.vercel.app/",
    sourceCodeUrl: "https://github.com/Abdullah-FSWD/lms",
  },
  {
    id: "zotion",
    heading: "Zotion",
    subheading: " All-in-One Workspace for Notes, Tasks & Collaboration",
    description:
      "A modern productivity platform inspired by Notion. It includes core features such as rich-text note-taking, task management, and real-time collaboration. The application is designed to help individuals and teams organize their work efficiently in a unified workspace.",
    imageUrl: "/imgs/projects/zotion.png",
    techStack: [
      "TypeScript",
      "Next",
      "MongoDB",
      "TailwindCSS",
      "shadcn/ui",
      "Axios",
      "Prisma",
      "zod",
      "clerk-auth",
    ],
    liveDemoUrl: "zotion-kohl.vercel.app/",
    sourceCodeUrl: "https://github.com/Abdullah-FSWD/notion-clone",
  },
];

export const tooltipItems = [
  {
    id: 1,
    name: "Bogdan Aleksic",
    designation: "Great job!",
    image: "/imgs/avatars/bogdan.svg",
  },
  {
    id: 2,
    name: "Djordje Djurovic",
    designation: "Incredibly responsible",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    name: "Anthony Sean",
    designation: "Highly recommended!",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    name: "Alex Finn",
    designation: "Enjoyable experience.",
    image: "/imgs/avatars/Alex.jpg",
  },
];

export const testimonialItems = [
  {
    id: 1,
    stars: 5,
    name: "Alex Finn",
    proffesion: "Lead Web Designer at knots.io",
    description:
      "“Working with Andrija was a very smooth experience from start to finish.  He not only brings strong technical skills to front-end development, but his attention to detail and commitment to delivering pixel-perfect  designs made a huge difference in our project. He is enthusiastic in  suggesting improvements. Always ready to answer questions or provide  updates. If you're looking for a reliable developer who brings  creativity and efficiency to the table, Andrija is the right person!”",
    image: "/imgs/avatars/Alex.jpg",
  },
  {
    id: 2,
    stars: 5,
    name: "Djordje Djurovic",
    proffesion: "CEO at DigitalityLab",
    description:
      "“Andrija is an outstanding frontend specialist and presents consistently high level of work. During our work together, he has demonstrated extraordinary skills in simplifying complex ideas into clean, functional, and visually appealing designs. His communication is to the point and time management is perfect, even for the most pressing deadlines. I would highly recommend him to any company looking to bring on a frontend developer with strong technical skills and an keen eye for design.”",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    stars: 5,
    name: "Anthony Sean",
    proffesion: "Chief Technology Officer at DealJet",
    description:
      "“On several occasions, I have had the privilege to work with Andrija, and he has never failed to impress. While he possesses a great level of knowledge in frontend development, what I find most remarkable about him is his obsession with getting every detail right in order to achieve perfection in the end-user experience. He always pays attention to the project requirements, raises up some pertinent issues, and most importantly delivers beyond the call of duty. Andrija is the kind of person who adds value to the team he's in!”",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    stars: 5,
    name: "Bogdan Aleksic",
    proffesion: "Investment Educator and Crypto Expert",
    description:
      "“I got on board Andrija from Upwork to help me develop a website for my course on blockchain, cryptocurrency, and investment techniques. Because of his effort, I was able to generate considerable sales from my course after launching it, and I have received good reviews about the design and functionality of the website. Andrija is someone I would highly recommend!”",
    image: "/imgs/avatars/bogdan.svg",
  },
];
