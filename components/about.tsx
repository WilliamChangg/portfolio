"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
    const { ref } = useSectionInView

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
      <p className="mb-3">
        I am a <span className="font-medium">third year</span>  undergraduate at <span className="font-medium"> University of Waterloo</span> studying Mathematics, Combinatorics and Optimization. 
        I have always been passsionate about learning new things and finding the most optimal solutions to problems, thus 
        coding has been something I've always gravitated towards. 
        I am primarily a self-taught <span className="font-medium">fullstack</span> developer with a strong foundation 
        in <span className="font-medium">data structures and algorithms, object-oriented design and programming, and databases</span>.
        My primary coding language is <span className="font-medium">python</span> but I am also comfortable in <span className="font-medium">C++, Javascript, and Typescript. </span>
        I have tinkered with various technologies and I have a general understanding of <span className="font-medium">Django, Bootstrap, Kafka, Next.js, React, Redis, and MySQL.</span> I have also 
        studied cloud services such as <span className="font-medium">AWS Route53, Lambda, S3, ELB, SNS, RDS, and EC2.</span> {" "}
        I am currently looking for an <span className="font-medium">intership</span> as a software engineer for <span className="font-medium">Winter</span> and <span className="font-medium">Summer 2024.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing sports such as basketball, soccer, and volleyball. 
        I also enjoy going to the gym, going on runs and seeing nice views on a hike. When I'm feeling less active, you can find me playing
        games such as League of Legends (sorry), and studying chess. {" "} <span className="font-medium"> I look forward to get in touch!</span>
      </p>
    </motion.section>
  );
}