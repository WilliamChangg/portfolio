import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import googleImg from "@/public/googlev2.png";
import smsImg from "@/public/smsv2.png";
import leagueImg from "@/public/league.png";
import pathfindingImg from "@/public/pathfindingv5.png";
import amznImg from "@/public/amzn.png";
import tradeImg from "@/public/trading_alg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer & Founder | Schedutor",
    location: "Waterloo, Canada",
    description: ["Built a full-stack SaaS platform with NextJS to help tutors facilitate scheduling and track lesson plans.",
      "Scaled to over 50 active users with a monthly growth rate of 110% post production deployment.",
      "Increased free-to-premium conversion rate to 25% through UX improvements and high-impact features.",
      "Developed dynamic front-end interfaces using Typescript, React, and Shadcn modular components.",
      "Optimized performance metrics (TBT: 0.12s, LCP: 1.5s) via code splitting, lazy loading, and caching.",
      "Designed scalable back-end with Supabase and Prisma ORM for real-time data, storage, and security.",
      "Integrated Auth.js with NextAuth for secure, token-based authentication and session handling.",
      "Used Stripe's API and webhooks to manage subscription events, billing states, and feature access.",
      "Implemented Agile SDLC with unit and functional testing, reducing post-deployment bugs by 80%.",
      "Automated CI/CD pipelines via Vercel and Github Actions, reducing release times by 50%",
    ],
      
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
    url: "https://schedutor.com/",
    target: "_blank",
  },
  {
    title: "Math & Computer Science Tutor | Private Tutor",
    location: "Vancouver, BC",
    description:[
      "Provided lessons in algorithms & data structures and object-oriented programming in Python & C++.",
      "Created targeted problem sets and coding exercises to reinforce theoretical concepts and coding skills",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
    url: undefined,
    target: "",
  },
  {
    title: "Data Analyst Intern | Dr. Lee's Ortho Clinic",
    location: "Vancouver, BC",
    description:[
      "Spearheaded a new patient scheduling proposal using data gathered with Python and MySQL.",
      "Increased patient care efficiency and allowed for more clients within a day.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - August 2022",
    url: undefined,
    target: "",
  },
  {
    title: "Lifeguard & Swim Instructor | City of Burnaby",
    location: "Burnaby, BC",
    description:[
      "Organized 8-week lesson plans for varying skill levels from toddlers to adults and handled PR problems in Mandarin and french.",
      "Worked with small team to keep all patrons in pool vicinity safe through active scanning techniques",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "November 2018 - December 2022",
    url: undefined,
    target: "",
  },
] as const;

export const projectsData = [
  {
    title: "Event-Driven Trading Algorithm",
    description:
      "Created a trading algorithm with python using mean reversion strategies on event-driven stocks.",
    tags: ["Python", "Pandas-ta", "Anaconda"], 
    imageUrl: tradeImg,
    webIrl: undefined,
    target: "_blank",
  },
  {
    title: "League Of Legends Win/Loss MLP Model ",
    description:
      "Trained MLP model with PyTorch giving an accuracy of 73.07% of predicting the chance of winning/osing a game in LoL after 10 minutes of in-game time.",
    tags: ["Python","Pytorch","Pandas", "Numpy",],
    imageUrl: leagueImg,
    webIrl: "https://github.com/WilliamChangg/LoL-Win-Loss-MLP-Model",
    target: "_blank",
  },
  {
    title: "Amazon Price Webscraper",
    description:
      "Implemented a web scraper that tracks and compares product prices on amazon.ca",
    tags: ["Python"," Selenium", "Beautiful Soup", "Pandas"],
    imageUrl: amznImg,
    webIrl: "https://github.com/WilliamChangg/amzn-price-web-tracker",
    target: "_blank",
  },
  {
    title: "Student Management System",
    description:
      "Creates, reads, updates, and deletes student information and stores student data in a SQLite table.",
    tags: ["Django", "Python", "Bootstrap", "SQLite"],
    imageUrl: smsImg,
    webIrl: "https://github.com/WilliamChangg/student_management_system",
    target: "_blank",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Used Dijkstra's algorithm where the user can create mazes and blockades to find the shortest path between 2 nodes.",
    tags: ["React", "Javascript"],
    imageUrl: pathfindingImg,
    webIrl: "https://github.com/WilliamChangg/pathfinding-visualizer",
    target: "_blank",
  },
  {
    title: "Google Search Clone",
    description:
      "Designed a Google clone that mimics their search algorithm for links, titles, images, videos, and news.",
    tags: ["React", "Javascript", "Rapid API", "Tailwind CSS"],
    imageUrl: googleImg,
    webIrl: "https://github.com/WilliamChangg/google-search-clone",
    target: "_blank",
  },
] as const;

export const skillsLanguage = [  
  "Python",
  "C++",
  "TypeScript",
  "JavaScript",
] as const;

export const skillsDB = [  
  "NextJS",
  "React",
  "Supabase",
  "Prisma",
  "MySQL",
] as const;

export const skillsTools = [
  "Git",
  "Github",
  "Selenium",
  "BS4",
  "ShadCn",
  "Pytorch",
  "Pandas",
  "NumPy",
  "MatPlotLib",
] as const;
