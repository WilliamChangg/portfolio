import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import googleImg from "@/public/googlev2.png";
import smsImg from "@/public/smsv2.png";
import pathfindingImg from "@/public/pathfindingv5.png"
import Link from 'next/link';

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
    title: "Co-founder | Schedulancer",
    location: "Waterloo, ON",
    description:
      "Did full-stack development to build an online scheduling service targetting freelancers with pre-existing clientele bases. Worked with Typescript, React, Next.js, Kafka, Redis, and Tailwind CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Present",
  },
  {
    title: "AWS Cloud Practitioner",
    location: "Online",
    description:
      "Certified as an AWS Cloud Practitioner, knowledgable in multiple AWS services such as Lambda, Route 53, S3, EC2, and more, cloud concepts, security, billing and services",
    icon: React.createElement(LuGraduationCap),
    date: "November 2023",
  },
  {
    title: "Data Analyst Intern | Lee's Orthokeratology Clinic",
    location: "Vancouver, BC",
    description:
      "Spearheaded a new patient scheduling proposal using data gathered with Python and MySQL. Increased patient caare efficiency and allowed for more clients within a day.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - August 2022",
  },
  {
    title: "Lifeguard & Swim Instructor | City of Burnaby",
    location: "Burnaby, BC",
    description:
      "Organized 8-week lesson plans for varying skill levels from toddlers to adults and handled PR problems in Mandarin and french.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2018 - December 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Student Management System",
    description:
      "Creates, reads, updates, and deletes student information and stores student data in a SQLite table.",
    tags: ["Django", "Python", "Bootstrap", "SQLite"],
    imageUrl: smsImg
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Used Dijkstra's algorithm where the user can create mazes and blockades to find the shortest path between 2 nodes.",
    tags: ["React", "Javascript"],
    imageUrl: pathfindingImg
  },
  {
    title: "Google Search Clone",
    description:
      "Designed a Google clone that mimics their search algorithm for links, titles, images, videos, and news.",
    tags: ["React", "Javascript", "Rapid API", "Tailwind CSS"],
    imageUrl: googleImg
  },
] as const;

export const skillsData = [  
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Django",
  "Bootstrap",
  "Kafka",
  "Redis",
  "MySQL",
  "SQLite",
  "Framer Motion",
  "AWS Route 53",
  "AWS Lambda",
  "AWS S3",
  "AWS EC2",
  "HTML",
  "CSS",
] as const;