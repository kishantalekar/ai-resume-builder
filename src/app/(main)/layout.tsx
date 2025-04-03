import React from "react";
import Navbar from "./Navbar";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
    </div>
  );
}
