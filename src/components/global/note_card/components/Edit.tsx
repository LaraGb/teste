"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditIcon from "@/assets/icons/edit.svg";

export default function Edit() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button>
        <Image src={EditIcon} alt="logo" role="img" width={17} height={17} />
      </button>
    </>
  );
}
