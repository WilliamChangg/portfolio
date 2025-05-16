"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref}
    className="w-full max-w-[2000px] scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                maxWidth: "2000px", 
                
     
              }}
              visible={true}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              
              <a 
                className="font-semibold capitalize"
                href={item.url}
                target={item.target}
                rel="noopener noreferrer">{item.title}</a>
              <p className="font-normal !mt-0">{item.location}</p>
              
              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-white/75">
                {item.description.map((point, idx) => (
                  <li key={idx} className={ idx%2 ===0 
                    ? "py-2 text-gray-500 dark:text-gray-400"
                    : "py-2 text-gray-900 dark:text-white"
                  } >
                    {point}
                    </li>
                ))}
              </ul>

            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}