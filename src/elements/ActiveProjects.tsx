"use client";
import { motion } from "framer-motion";

export default function ActiveProjects() {
  return (
    <motion.div
      className="flex px-5 mt-12 justify-center 
        xs:flex-col-reverse xs:justify-center xs:items-center 
        md:flex-row md:justify-between"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}
