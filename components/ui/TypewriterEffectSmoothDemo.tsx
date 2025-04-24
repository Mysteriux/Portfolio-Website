"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi!",
    },
    {
      text: "I'm",
    },
    {
      text: "Dipesh, ",
    },
    {
      text: "Software Developer",
      className: "text-purple dark:text-purple",
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
