import Logo from "@/components/global/logo/Logo";
import React from "react";
import SearchField from "./components/SearchField";
import CircularBtn from "@/components/global/circular-btn/CircularBtn";
import Image from "next/image";
import closeIcon from "@/assets/icons/close.svg";

export default function TopBar() {
  return (
    <div className="py-4 bg-white shadow">
      <div className="max-w-[1355px] px-6 mx-auto flex-between-centralized">
        <div className="flex-center space-x-10">
          <Logo />
          <SearchField />
        </div>
        <CircularBtn>
          <Image
            src={closeIcon}
            alt="logo"
            role="img"
            width={14}
            height={14}
            aria-label="Dois post-its, um amarelo na frente de um laranja,
              presos por um alfinete vermelho"
          />
        </CircularBtn>
      </div>
    </div>
  );
}
