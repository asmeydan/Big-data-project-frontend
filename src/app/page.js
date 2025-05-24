"use client"
import { redirect } from 'next/navigation'
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=> {
    redirect("/dashboard")
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
      <Link href="auth">auth</Link>
    </main>
  );
}