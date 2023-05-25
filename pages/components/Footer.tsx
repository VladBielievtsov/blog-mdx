import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 pb-8 container mx-auto flex items-center justify-between mt-auto">
      <div>
        Author:{" "}
        <Link
          href="https://github.com/VladBielievtsov"
          target="_blank"
          className="hover:underline hover:text-[#ddb5f2] underline-offset-4"
        >
          Vlad Bielievtsov
        </Link>
      </div>
    </footer>
  );
}
