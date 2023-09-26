import React from "react";
import CircularBtn from "@/components/global/circular-btn/CircularBtn";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.svg";

export default function SearchField() {
  return (
    <div className="w-[82%] px-2 h-7 border bg-white flex-center">
      <input
        type="text"
        placeholder="Pesquisar notas"
        className="grow outline-none text-xs"
      />
      <CircularBtn>
        <Image
          src={SearchIcon}
          alt="logo"
          role="img"
          width={19}
          height={20}
          aria-label="Dois post-its, um amarelo na frente de um laranja,
              presos por um alfinete vermelho"
        />
      </CircularBtn>
    </div>
  );
}
