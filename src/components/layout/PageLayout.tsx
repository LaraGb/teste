import React from "react";
import TopBar from "./top-bar/TopBar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="grow">{children}</div>
    </div>
  );
}
