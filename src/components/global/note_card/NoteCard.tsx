import React from "react";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import ColorBucketIcon from "@/assets/icons/color_bucket.svg";
import CloseIcon from "@/assets/icons/close.svg";
import Paragraph from "../paragraph/Paragraph";
import PickerColor from "./components/PickerColor";
import Edit from "./components/Edit";

export default function NoteCard() {
  return (
    <div className="bg-white rounded-3xl">
      <div className="flex-center justify-between px-6 pt-4 pb-2 border_bottom">
        <h1 className="text-sm font-bold">Título</h1>
        <button>
          <Image src={StarIcon} alt="logo" width={19} height={18} />
        </button>
      </div>
      <div className="px-6 py-4 h-80">
        <Paragraph>
          Clique ou arraste o arquivo Paragraphara esta área para fazer upload
        </Paragraph>
      </div>
      <div className="flex-center justify-between p-6">
        <div className="flex-center space-x-2">
          <Edit />
          <PickerColor />
        </div>
        <button>
          <Image src={CloseIcon} alt="logo" role="img" width={14} height={14} />
        </button>
      </div>
    </div>
  );
}
