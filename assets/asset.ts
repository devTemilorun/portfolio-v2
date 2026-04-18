import menu_icon from './menu_icon.svg'
import close_icon from './close_icon.svg'


import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiRedux,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiFastapi,
  SiGraphql,
  SiJsonwebtokens,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiVercel,
  SiNetlify,
  SiRender,
  SiCpanel,
  SiPostman,
  SiFigma,
  SiNpm,
  SiYarn,
  SiVite,
  SiWebpack
} from 'react-icons/si';

import { VscCode } from "react-icons/vsc";
import { Sparkles } from 'lucide-react'; 




export const assets = {
  menu_icon,
  close_icon,
}

export const projects = [
  {
    title: "Strands That Perfectly Complement You!",
    status: "IN PROCESS",
    tags: ["React", "Tailwind", "Node.js"]
  },
  {
    title: "Yvonne Kafor Coaching",
    status: "FEATURED",
    description: "Experienced & Compassionate Mediator, Divorce & Custody Coach",
    tags: ["JavaScript", "Express.js", "React", "Node.js", "CSS"]
  },
  {
    title: "Confessio",
    status: "FEATURED",
    tagline: "Speak without fear.",
    tags: ["HTML", "Tailwind", "PostgreSQL", "Express.js", "Socket.io"]
  },
  {
    title: "Axelerate",
    status: "FEATURED",
    tagline: "DATA-DRIVEN SCALE HUMAN-DRIVEN DESIRE",
    tags: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "LinguaCore AI",
    status: "Live",
    tagline: "Global Intent. Local Voices.",
    tags: ["AI", "Python", "React Native"]
  },
  {
    title: "Xtensionvrsse",
    status: "Live",
    tagline: "Global Intent. Local Voices.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"]
  }
];

export const techStacks = {
  Frontend: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "AOS", icon: Sparkles, color: "#4CAF50" }, 
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Context API", icon: FaReact, color: "#61DAFB" }
  ],
  Backend: [
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "RESTful APIs", icon: SiFastapi, color: "#009688" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#000000" },
    { name: "Laravel Sanctum", icon: SiLaravel, color: "#FF2D20" }
  ],
  Database: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" }
  ],
  VersionControl: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" }
  ],
  Deployment: [
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    { name: "Render", icon: SiRender, color: "#46E3B7" },
    { name: "cPanel", icon: SiCpanel, color: "#FF6C2C" }
  ],
  Tools: [
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "npm", icon: SiNpm, color: "#CB3837" },
    { name: "yarn", icon: SiYarn, color: "#2C8EBB" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" }
  ]
};