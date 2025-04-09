"use client";
import React from "react";
import "./menu.css";
import { motion } from "motion/react";
import { menuOpen } from "@/app/features/MenuSlice";
import { useAppSelector } from "@/app/hooks/reduxHooks";

interface Variants {
  open: {
    width: number;
    height: number;
    top: string;
    right: string;
    transition: {
      duration: number;
      ease: number[];
    };
  };
  close: {
    width: number;
    height: number;
    top: string;
    right: string;
    transition: {
      duration: number;
      ease: number[];
    };
  };
}
const variants: Variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};
export const Menu = () => {
  const isMenuOpen = useAppSelector(menuOpen);
  return (
    <motion.div
      variants={variants}
      animate={isMenuOpen ? "open" : "close"}
      className="menu"
    ></motion.div>
  );
};
