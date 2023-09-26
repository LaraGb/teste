import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex-center space-x-4">
      <Image
        src="/logo.png"
        alt="logo"
        role="img"
        width={36}
        height={36}
        aria-label="Dois post-its, um amarelo na frente de um laranja,
        presos por um alfinete vermelho"
      />
      <span>CoreNotes</span>
    </div>
  );
}
