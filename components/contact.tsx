"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:w43chang@uwaterloo.ca">
          w43chang@uwaterloo.ca
        </a>{" "}
        <br></br>
        Or 
        <br></br>
        Connect with me on {" "}
                <a className="underline" href="https://linkedin.com/in/williamchangg"
                target="_blank"
                rel="noopener noreferrer"
                >
          LinkedIn!
        </a>{" "}
      </p>
     
                

    </motion.section>
  );
}