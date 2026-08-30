"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      className="fixed left-6 top-5 z-50 text-xl font-bold tracking-tight text-foreground"
    >
      Mathathon
    </Link>
  );
}