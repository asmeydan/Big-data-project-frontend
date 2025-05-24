"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const [nav, setNav] = useState(false);

  return (
    <section className=" flex flex-row ">
      <button
        className={`${
          nav ? "text-white" : " text-black"
        } absolute top-5 right-5 z-20 sm:hidden`}
        onClick={() => setNav(!nav)}
      >
        a
      </button>

      <nav
        className={`h-screen w-full min-w-[300px] sm:w-auto bg-gray-800 px-4 py-10 absolute inset-0 sm:static sm:flex ${
          nav ? "flex" : "hidden"
        } flex-col justify-between`}
      >
        <Link
          href="/dashboard"
          onClick={() => setNav(false)}
          className=" text-center bg-transparent text-white font-semibold text-xl md:text-4xl"
        >
          Büyük Veri
        </Link>
        <div className=" flex flex-col gap-4">
          
          <Link
            onClick={() => setNav(false)}
            href="/dashboard/upload"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            Dosya yükle
          </Link>
          <Link
            onClick={() => setNav(false)}
            href="/dashboard/analyzes"
            className=" text-xl font-semibold rounded-xl px-2 py-4 bg-white flex w-full justify-center items-center hover:bg-gray-200"
          >
            Anlalizleri gör
          </Link>
          
        </div>
        <div>
          
        </div>
      </nav>

      <div className=" flex-1 ">{children}</div>
    </section>
  );
}