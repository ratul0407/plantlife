"use client";
import React, { useState } from "react";
import { motion } from "motion/react"; // Corrected import

export const Button = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="rounded-xl cursor-pointer w-25 h-10 flex items-center justify-center relative uppercase overflow-hidden"
    >
      <motion.div
        animate={{ y: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
        className="slider | relative w-25 h-10"
      >
        <div className="h-full w-full bg-green-500">
          <PerspectiveText label="Menu" />
        </div>
        <div className="h-full w-full absolute top-full bg-black text-white">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center group transform-3d">
      <p className="group-hover:translate-y-full opacity-100 group-hover:opacity-0">
        {label}
      </p>
      <p className="group-hover:rotate-x-90 transition-all duration-200 absolute -rotate-x-90 opacity-0 group-hover:opacity-100 origin-bottom translate-y-[9px]">
        {label}
      </p>
    </div>
  );
}
