import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Dropdown() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Work", href: "/work" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      variants={{
        initial: { scaleY: 0 },
        animate: {
          scaleY: 1,
          transition: {
            ease: [0.12, 0, 0.39, 0],
            duration: 0.5,
          },
        },
        exit: {
          scaleY: 0,
          transition: {
            ease: [0.12, 1, 0.45, 1.07],
            duration: 0.5,
            delay: 0.5,
          },
        },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 origin-top left-0 w-full h-screen pb-10 px-10 pt-6 text-black bg-violet-800 z-[80]"
    >
      <div className="flex h-full flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold  text-black">Menu</h1>
        </div>

        <div className="flex flex-col h-full justify-center font-serif items-center gap-4 uppercase text-4xl text-black">
          {navLinks.map((link, i) => {
            return (
              <motion.div key={i} className="overflow-hidden">
                <motion.div
                  variants={{
                    initial: {
                      y: "30vh",
                      transition: { duration: 0.5, delay: 0.09 * i },
                    },
                    open: {
                      y: 0,
                      transition: { duration: 0.7, delay: 0.09 * i },
                    },
                    exit: {
                      y: "30vh",
                      transition: { duration: 0.7, delay: 0.09 * i },
                    },
                  }}
                  initial="initial"
                  animate="open"
                  exit="exit"
                >
                  <Link to={link.href}>{link.title}</Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div>
          <p className="underline underline-offset-2 decoration-solid decoration-black text-black text-lg text-center">
            info@gmail.com
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Dropdown;
