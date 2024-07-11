"use client";
import Link from "next/link";

export default function Blog() {  

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex place-items-center p-5 bg-white text-black">
        <Link href="/">Home</Link>
      </div>


      <div className="relative flex place-items-center p-5 bg-white text-black">
        In Blog Page
      </div>

      
    </main>
  );
}
