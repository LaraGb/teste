import React from "react";

export default function Paragraph({ children }: { children: string }) {
  return <p className="text-sm">{children}</p>;
}
