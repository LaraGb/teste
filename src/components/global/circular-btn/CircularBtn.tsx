import React from "react";

type circularBtnT = {
  children: React.ReactNode;
};

export default function CircularBtn({ children }: circularBtnT) {
  return <button>{children}</button>;
}
