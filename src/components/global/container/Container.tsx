import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10">
      <div className="max-w-[1254px] px-4 mx-auto">{children}</div>
    </div>
  );
}
