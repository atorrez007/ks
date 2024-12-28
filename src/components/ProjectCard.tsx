import { ProjectType } from "@/types";
import { motion } from "framer-motion";

// import Link from "next/link";

// interface ProjectType {
//   title: string;
//   uri: string;
//   description: string;
// }
// export type projectType = {
//   id: number;
//   title: string;
//   imgUrl: string;
//   description: string;
//   tags: string[];
//   link: string;
// };
export default function ProjectCard({
  // id,
  title,
  // imgUrl,
  description,
}: // tags,
// link,
ProjectType) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="max-w-md shadow-md shadow-slate-900 hover:shadow-md dark:hover:shadow-md dark:hover:shadow-terminalGreen dark:border-terminalGreen border-slate-800 border-2"
    >
      <div className="flex flex-col h-full">
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="flex-grow">{description}</p>
        </div>
        <div className="flex w-auto justify-center">
          {/* {tags.map((skill: string) => (
            <span
              color="red"
              key={skill}
              className=" bg-slate-800 rounded-md font-semibold px-6 py-3 mx-2"
            >
              {skill}
            </span>
          ))} */}
        </div>
      </div>
    </motion.div>
  );
}
