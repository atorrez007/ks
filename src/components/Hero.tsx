"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import image2 from "../assets/porftolio-image2.jpg";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { cursorVariants } from "../lib/variants";

export default function Intro() {
  const greeting = "Welcome to Koinos Sponsors";

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    greeting.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, greeting.length, {
      duration: 2.7,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [count]);

  return (
    <section>
      <motion.div
        className="flex px-5 mt-12 justify-center 
        xs:flex-col-reverse xs:justify-center xs:items-center 
        md:flex-row md:justify-between"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="text-center md:text-left">
            <h1 className="group my-4 text-3xl font-semibold dark:text-terminalGreen">
              <motion.span>{displayText}</motion.span>
              <motion.span
                className="inline-block"
                variants={cursorVariants}
                animate="blinking"
              >
                _
              </motion.span>
            </h1>
          </div>
          <h1 className="my-3 text-lg text-center md:text-left pr-6">
            Koinos Sponsors is a website dedicated to funding new and upcoming
            projects in the Koinos Ecosystem.
          </h1>
          <h1 className="my-3 text-lg text-center md:text-left pr-6">
            If you have a project and would like funding please apply! 👇🏻
          </h1>
        </div>
        <div className="flex">
          <Image
            className="rounded-xl shadow-xl"
            height={350}
            width={350}
            alt="koinos-photo"
            src={image2}
            quality={100}
            priority={true}
          />
        </div>
      </motion.div>
    </section>
  );
}
