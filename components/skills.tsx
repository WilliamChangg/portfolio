"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsDB, skillsLanguage, skillsTools } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Divider } from "./ui/divider";




const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[80rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
    
      <h2 className="text-xl font-medium capitalize text-center">
          Languages
          <Divider className="mt-2 justify-self-center max-w-xs"/>
      </h2>
      
      <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800">
        {skillsLanguage.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
          
        ))}
      </ul>
      <h2 className="text-xl font-medium capitalize text-center mt-4">
          Frameworks and Databases
          <Divider className="mt-2 justify-self-center max-w-xs"/>
      </h2>
      <ul className="flex flex-wrap justify-start gap-2 text-lg text-gray-800 mt-5">
        {skillsDB.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <h2 className="text-xl font-medium capitalize text-center mt-4">
          Tools and Libraries
          <Divider className="mt-2 justify-self-center max-w-xs"/>
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-5">
        {skillsTools.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-2 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}