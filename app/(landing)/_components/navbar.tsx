"use client";

import { ThemeToggleButton } from "@/components/layout/theme-toggler";
import useScroll from "@/lib/hooks/use-scroll";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 dark:bg-black/30 dark:border-gray-900 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
        <Image
          alt="Garden Tasks App logo"
          src="/garden_tasks.svg"
          width={150}
          height={150}
          className="dark:hidden w-32 h-32 md:w-40 md:h-40 xl:w-60 xl:h-60 "
        /> <Link href="/" className="flex items-center font-display text-2xl">
            <span
              className="animate-fade-up bg-gradient-to-br from-green-600 to-green-300 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm [text-wrap:balance]"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              Garden Tasks App 
            </span>
          </Link>
          <div className="flex items-center gap-3 ">
            <ThemeToggleButton />

            <Link
              href="/sign-in"
              prefetch={false}
              className="rounded-full border border-black bg-black p-1.5 md:py-1  px-4 text-sm md:text-base text-white transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
