"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
    <SectionHeading>About me</SectionHeading>
    <div className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-2xl focus:scale-[1.15] 
                      hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60">
        <p >
          I am a <span className="font-medium">New Grad</span> from the <span className="font-medium"> University of Waterloo</span> with a degree in Mathematics, specializing in Combinatorics and Optimization. 
          I have always been passionate about learning and problem-solving, which naturally led me to coding. I enjoy finding efficient, elegant solutions and am excited to keep growing as a developer. 
        </p>
    </div>
    <div className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-2xl focus:scale-[1.15] 
                      hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 mt-7">
        <p>
          I am a self-taught <span className="font-medium">fullstack</span> developer with a strong foundation 
          in <span className="font-medium">data structures and algorithms, object-oriented design and programming, and databases</span>.
        </p>
    </div>
    <div className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-2xl focus:scale-[1.15] 
                      hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 mt-7">
          <p>
          I love working on new projects with real functionality and solutions; from creating scheduling systems, profitable trading algorithms, to training MLP models to 
          calculate the probability of winning a game such as 
          League of Legends.
          </p>
      </div>
      <div className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-2xl focus:scale-[1.15] 
                      hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 mt-7"
            >
        <a href="/#skills">
          My primary coding language is <span className="font-medium">Python</span> but I am also comfortable in <span className="font-medium">C++, Javascript, and Typescript. </span>
          I have tinkered with various technologies and my current favourite tech stack right now is NextJS, Supabase, Prisma, and ShadCn. You can see my other skills <span className="font-medium">here!</span>
        </a>
      </div>
      <div className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-2xl focus:scale-[1.15] 
                      hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 mt-7">
        <p>
        I am currently looking for a <span className="font-medium">new grad or internship</span> as a software engineer for <span className="font-medium">Fall 2025</span>.
        </p>
      
      </div>
      <div className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-2xl focus:scale-[1.15] 
                      hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 mt-7">

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy doing sports such as basketball, soccer, and volleyball. 
        I also enjoy going to the gym, going on runs and hiking. When I&apos;m feeling less active, you can find me playing
        games or watching Netflix. {" "} <span className="font-medium"> I look forward to get in touch!</span>
      </p>
      </div>
    </motion.section>
  );
}