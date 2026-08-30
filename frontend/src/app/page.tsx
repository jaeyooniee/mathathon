"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const [settled, setSettled] = useState(false);
  const { data: session, status } = useSession();

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

      <div
        className={`absolute right-6 top-5 flex items-center gap-3 transition-opacity delay-300 duration-500 ${
          settled ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {status === "authenticated" ? (
          <>
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name ?? "Profile"}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="text-sm font-medium">{session.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="cursor-pointer text-sm text-foreground/60 underline hover:text-foreground"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-zinc-200"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}