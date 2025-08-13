export interface Project {
  title: string;
  description: string;
  stack: string[];
  demo?: string;
  code: string;
  image?: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Cucumber Chad DApp",
    description:
      "A decentralized gaming application integrating LINE Messaging with Kaia blockchain for TicTacToe gameplay, NFT minting, and token rewards.",
    stack: [
      "Vue.js",
      "Vite",
      "TypeScript",
      "Kaia Blockchain",
      "LINE LIFF",
      "Ethers.js",
    ],
    code: "https://github.com/joebertcerezo/cucumber-chad-dapp-vue/tree/develop",
    image: "images/cucumberChad.png",
    gradient: "from-emerald-500 to-cyan-600",
    icon: "Gamepad2",
  },
  {
    title: "File2IPFS",
    description:
      "A decentralized file storage application using IPFS (InterPlanetary File System) for secure, distributed file sharing and storage.",
    stack: ["Nuxt.js", "Vue.js", "TypeScript", "Tailwind CSS", "Pinata API"],
    code: "https://github.com/joebertcerezo/File2IPFS",
    image: "images/file2ipfs.png",
    gradient: "from-purple-500 to-blue-600",
    icon: "Database",
  },
  {
    title: "UnggoyType",
    description:
      "An interactive typing speed test application with real-time WPM tracking, accuracy metrics, and customizable test parameters.",
    stack: ["HTML", "CSS", "JavaScript", "Web APIs"],
    code: "https://github.com/joebertcerezo/UnggoyType",
    image: "images/unggoyType.png",
    gradient: "from-green-500 to-teal-600",
    icon: "Keyboard",
  },
  {
    title: "Flutter Pokedex",
    description:
      "A comprehensive Pokemon encyclopedia mobile app with detailed Pokemon information, search functionality, and beautiful UI design.",
    stack: ["Flutter", "Dart", "REST API", "Provider"],
    code: "https://github.com/joebertcerezo/flutter_pokedex",
    gradient: "from-red-500 to-yellow-600",
    icon: "Smartphone",
  },
  {
    title: "Exam Management System",
    description:
      "A comprehensive Spring Boot application for managing online examinations with user authentication, exam creation, and result tracking.",
    stack: ["Spring Boot", "Java", "JPA", "MySQL"],
    code: "https://github.com/joebertcerezo/spring-boot-exam-portal",
    gradient: "from-blue-500 to-indigo-600",
    icon: "BookOpen",
  },
  {
    title: "Flutter Chat App",
    description:
      "Real-time messaging application built with Flutter, featuring user authentication, chat rooms, and modern Material Design UI.",
    stack: ["Flutter", "Dart", "Firebase", "Material UI"],
    code: "https://github.com/joebertcerezo/flutter_chat_app",
    gradient: "from-pink-500 to-rose-600",
    icon: "MessageCircle",
  },
  {
    title: "CheckMe Attendance System",
    description:
      "An automated attendance tracking system with QR code scanning, real-time monitoring, and comprehensive reporting features.",
    stack: ["Vue.js", "PHP", "MySQL", "QR Code"],
    code: "https://github.com/joebertcerezo/CheckMe",
    image: "/images/checkme_login.png",
    gradient: "from-orange-500 to-red-600",
    icon: "QrCode",
  },
];
