import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/global/container/Container";
import NoteCard from "@/components/global/note_card/NoteCard";
import CardGrid from "@/components/global/card-grid/CardGrid";
import CircularBtn from "@/components/global/circular-btn/CircularBtn";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import Modal from "@/components/global/modal/Modal";
import Paragraph from "@/components/global/paragraph/Paragraph";

export default function page() {
  return (
    <PageLayout>
      <Container>
        <div className="border bg-white max-w-lg mx-auto">
          <div className="flex-between-centralized py-2 px-4 border_bottom">
            <span className="font-bold text-dark">Título</span>
            <CircularBtn>
              <Image src={StarIcon} alt="logo" width={19} height={18} />
            </CircularBtn>
          </div>
          <div className="p-4">
            <span className="text-sm text-light">criar nota...</span>
          </div>
          <div className="py-2"></div>
        </div>
        <div className="mt-16 space-y-4">
          <span>Favoritos</span>
          <CardGrid>
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </CardGrid>
        </div>
        <div className="mt-16 space-y-4">
          <span>Outras</span>
          <CardGrid>
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </CardGrid>
        </div>
      </Container>
    </PageLayout>
  );
}
