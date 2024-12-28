"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { socialData } from "@/lib/data";

const dynamicSocials = socialData.map((item) => {
  return (
    <motion.span
      key={item.id}
      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
    >
      <SocialIcon url={item.url} target={item.target} style={item.style} />
    </motion.span>
  );
});

function Social() {
  return (
    <motion.section
      className="mt-8 "
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <hr className="my-8 border-b-[1px] border-black  dark:border-white"></hr>
      <section className="flex justify-center gap-6">{dynamicSocials}</section>
    </motion.section>
  );
}

export default Social;
