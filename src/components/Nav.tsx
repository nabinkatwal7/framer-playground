import React from "react";
import { motion } from "framer-motion";
import { GiSpikedDragonHead } from "react-icons/gi";

const Nav = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="w-screen flex justify-evenly bg-zinc-600"
    >
      <motion.a
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.5,
            },
          },
        }}
        className="text-6xl m-1"
        href="#"
      >
        <GiSpikedDragonHead />
      </motion.a>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.6,
            },
          },
        }}
        className="text-xl p-2 m-3 hover:bg-stone-500 hover:rounded-xl"
        href="#"
      >
        Home
      </motion.a>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          },
        }}
        className="text-xl p-2 m-3 hover:bg-stone-500 hover:rounded-xl"
        href="#"
      >
        About
      </motion.a>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1,
            },
          },
        }}
        className="text-xl p-2 m-3 hover:bg-stone-500 hover:rounded-xl"
        href="#"
      >
        Career
      </motion.a>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.2,
            },
          },
        }}
        className="text-xl p-2 m-3 hover:bg-stone-500 hover:rounded-xl"
        href="#"
      >
        Contact
      </motion.a>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.4,
            },
          },
        }}
        className="text-xl p-2 m-3 hover:bg-stone-500 hover:rounded-xl"
        href="#"
      >
        About Us
      </motion.a>
    </motion.div>
  );
};

export default Nav;
