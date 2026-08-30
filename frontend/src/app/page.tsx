"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <h1
        className={`absolute font-bold tracking-tight transition-all duration-1000 ease-in-out ${
          settled
            ? "left-6 top-5 text-xl"
            : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl"
        }`}
      >
        Mathathon
      </h1>

      <p
        className={`absolute left-1/2 top-1/2 max-w-md -translate-x-1/2 translate-y-10 px-6 text-center text-lg text-foreground/70 transition-opacity duration-500 ${
          settled ? "opacity-0" : "opacity-100"
        }`}
      >
        Don&apos;t forget what you learned. Stay sharp for your OAs.
      </p>

      <Link
        href="/login"
        className={`absolute right-6 top-5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-opacity delay-300 duration-500 hover:bg-zinc-200 ${
          settled ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        Login
      </Link>
    </div>
  );
}