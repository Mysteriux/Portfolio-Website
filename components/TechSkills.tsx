"use client";

import React from "react";

import { techskills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const TechSkills = () => {
  return (
    <section id="tech-skills" className="py-20">
      <h1 className="heading">
        Technical
        <span className="text-purple"> Skills</span>
      </h1>

      <div className="flex flex-col items-center">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="my-[50px] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={techskills}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
