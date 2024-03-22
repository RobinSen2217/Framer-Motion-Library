import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Curve from "./Curve";
function SideNav() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.div
      variants={{
        initial: {
          x: "calc(100% + 100px)",
        },
        enter: {
          x: "0%",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
          x: "calc(100% + 100px)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
      }}
      animate="enter"
      exit="exit"
      initial="initial"
      className="fixed top-0 right-0 h-[100vh] bg-[rgb(41,41,41)] text-white z-[80]"
    >
      <div className="py-[80px] flex-col h-full pr-[100px] pl-[50px] flex justify-between">
        <div className="flex flex-col w-full  gap-[12px] mt-[60px]">
          <div className="text-sm  text-zinc-600 border-b pb-2  mb-3 borber-b-2 border-solid border-zinc-600 w-[250px]">
            <p className="">Navigation</p>
          </div>
          {navItems.map((item, ind) => {
            return (
              <motion.div
                key={ind}
                variants={{
                  initial: { x: "80px" },
                  enter: {
                    x: "0px",
                    transition: {
                      duration: 0.8,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.05 * ind,
                    },
                  },
                  exit: {
                    x: "80px",
                    transition: {
                      duration: 0.8,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.05 * ind,
                    },
                  },
                }}
                animate="enter"
                initial="initial"
                exit="exit"
                className="text-left w-full"
              >
                <a
                  href={item.href}
                  className="no-underline text-3xl text-white font-semibold text-left"
                >
                  {item.title}
                </a>
              </motion.div>
            );
          })}
        </div>
        <div>
          <div className="flex justify-between gap-[40px] text-[12px] w-3/4">
            <a href="#" className="hover:cursor-pointer">
              LinkedIn
            </a>
            <a href="#" className="hover:cursor-pointer">
              Twitter
            </a>
            <a href="#" className="hover:cursor-pointer">
              Githhub
            </a>
            <a href="#" className="hover:cursor-pointer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

export default SideNav;
