import React from "react";
import Link from "next/link";

export default function Header() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <header className="container mx-auto px-4 py-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="bg-[#CDD6F4] text-[#1E1E2E] p-2 transform hover:rotate-6 inline-block duration-150"
        >
          My-Blog
        </Link>
      </div>
      <nav className="flex items-center space-x-4">
        {links.map((link, id) => (
          <Link
            key={id}
            href={link.path}
            className="hover:underline hover:text-[#ddb5f2] underline-offset-4"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
