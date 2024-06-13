import React from "react";
import Link from "next/link";
import { GoBack } from "@/components/GoBack";

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: `url("https://i.ibb.co/hHpVwKQ/desktop-1920x1080.png")`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-4 text-3xl font-medium text-center text-white">
          Coming Soon
        </h1>
        <p className="mb-8 text-lg text-center text-white">
          The website is under development. I&apos;ll be launching soon!
        </p>
        <GoBack />
      </div>
    </div>
  );
}
