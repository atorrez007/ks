"use client";
import React, { useState } from "react";
import { links } from "../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { LuSunMoon } from "react-icons/lu";
import Link from "next/link";
import { useTheme } from "next-themes";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const handleMenu = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <motion.div
        className="flex p-4 border-b-[2px] dark:border-white border-black items-center justify-between"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className=" p-4 border-neutral-100 items-center justify-between">
          <div className="text-xl font-mono font-semibold tracking-wide">
            <Link href="/">
              <AnimatePresence>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  initial={{
                    x: -300,
                    opacity: 0,
                  }}
                  animate={{ x: 0, scale: 3, opacity: 1 }}
                  exit={{ scale: 3, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </motion.svg>
              </AnimatePresence>
            </Link>
          </div>
        </div>

        <nav className="px-2 gap-2 text-lg">
          <div className="hidden md:flex lg:flex">
            {links.map((link) => (
              <Link key={link.source} href={link.source}>
                <ul className="px-3 py-1 mr-1 transition-all duration-300 hover:bg-gray-700 rounded-md   hover:text-white cursor-pointer">
                  {link.name}
                </ul>
              </Link>
            ))}
            {theme === "dark" ? (
              <button
                onClick={() => {
                  setTheme("light");
                }}
              >
                <LuSunMoon size={30} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme("dark");
                }}
              >
                <LuSunMoon size={30} />
              </button>
            )}
          </div>
          <div className="-mr-0 flex md:hidden lg:hidden xl:hidden">
            {theme === "dark" ? (
              <button
                onClick={() => {
                  setTheme("light");
                }}
              >
                <LuSunMoon className="mr-5" size={30} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setTheme("dark");
                }}
              >
                <LuSunMoon className="mr-5" size={30} />
              </button>
            )}
            <button
              type="button"
              onClick={handleMenu}
              className="items-center dark:border-white border-black border-[2px] p-2 transition-all duration-400 hover:bg-slate-700 hover:text-white"
            >
              {open ? <TfiClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="py-1 origin-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{
              y: -50,
              opacity: -1,
              transition: { duration: 0.1 },
            }}
          >
            {links.map((link) => (
              <Link key={link.source} href={link.source} onClick={handleMenu}>
                <motion.ul
                  className="py-1 text-md md:hidden lg:hidden flex justify-center px-8 transition-all duration-300 hover:text-white cursor-pointer hover:bg-gray-700"
                  layout
                >
                  {link.name}
                </motion.ul>
              </Link>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Header;
