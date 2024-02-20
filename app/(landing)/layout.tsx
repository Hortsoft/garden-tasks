import { Suspense } from "react";
import Footer from "@/components/layout/footer";
import "./home.css";
import NavBar from "./_components/navbar";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-green-100  dark:from-indigo-900 dark:via-gray-800 dark:to-green-900">
        <div className="absolute  inset-0 dark:bg-black dark:opacity-50"></div>
      </div>
      <Suspense fallback="...">
        <NavBar />{" "}
      </Suspense>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
        {children}
      </main>
      <Footer />
    </>
  );
}
