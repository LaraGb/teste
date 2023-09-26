"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, MenuItem } from "./menu";
import type { MotionProps, Variants } from "framer-motion";

const colors = ["9DD6FF", "B9FFDD", "FFE8AC", "FFCAB9", "F99494", "9DD6FF"];

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
} satisfies Variants;

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps;

export default function PickerColor() {
  const [open, setOpen] = useState(false);

  return (
    <Menu
      label="Options"
      open={open}
      setOpen={setOpen}
      animate={open ? "open" : "closed"}
      initial="closed"
      exit="closed"
      variants={menu}
    >
      <div className="flex space-x-2 p-[6px] bg-white rounded-lg border">
        {colors.map((color, index) => (
          <MenuItem key={index} {...item}>
            <button
              key={index}
              className={`w-9 h-9 bg-[#9DD6FF] rounded-full`}
            />
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
}
