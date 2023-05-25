import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function about() {
  return (
    <main className={inter.className + " container mx-auto px-4 flex-1"}>
      <div className="text-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1677696295482-bf8a53d2ee90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
          alt="alt"
          className="h-[160px] w-[160px] block rounded-full mx-auto"
        />
        <h4>Vlad Bielievtsov</h4>
        <p>There should be a text about me 😁</p>
      </div>
    </main>
  );
}
