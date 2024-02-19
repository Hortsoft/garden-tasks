import Card from "@/components/shared/card";
import WebVitals from "@/components/shared/web-vitals";
import { nFormatter } from "@/lib/utils";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://api.github.com/repos/NiKHiLkr23/todo", {
    next: { revalidate: 86400 },
  });

  const { stargazers_count: stars } = await response.json();

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        
        <h1
          className="animate-fade-up gradient  text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Garden Tasks.
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-green-500  [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Easily Manage your Garden Tasks.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 "
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/sign-up"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <p>Get Started</p>
          </Link>
           
             
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Performance first",
    description:
      "Designed for efficiency and ease of use",
    demo: <WebVitals />,
  },

  {
    title: "Responsive Design",
    description:
      "Todo comes with Responsive Design so will work on a variety of screen sizes ",
    demo: (
      <div className="flex items-center justify-center space-x-8 md:space-x-20">
         
        <Image
          alt="Auth.js logo"
          src="/clerk-logo-light-mode.svg"
          width={500}
          height={500}
          className="dark:hidden w-32 h-32 md:w-40 md:h-40 xl:w-60 xl:h-60 "
        />
        
      </div>
    ),
    large: true,
  },
];
