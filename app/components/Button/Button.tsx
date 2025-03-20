"use client";
import React from "react";
import { motion } from "motion/react";
import "./button.css";
import { changeMenu, menuOpen } from "@/app/features/MenuSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
export const Button = () => {
  const isMenuOpen = useAppSelector(menuOpen);
  const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(changeMenu(!isMenuOpen))} className="button">
      <motion.div
        className="slider"
        animate={{ top: isMenuOpen ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el">
          <PerspectiveText label="Menu" />
        </div>
        <div className="el">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="perspective">
      <p className="label">{label}</p>
      <p className="label">{label}</p>
    </div>
  );
}
