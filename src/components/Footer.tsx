import Link from "next/link";
import { links } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white/80 py-2 text-center text-xs">
      <nav className="flex flex-col gap-1 m-4 mb-6 items-center text-orange-500">
        {links.map(link => (
          <Link key={link.to} href={link.to}>
            {link.to.charAt(0).toUpperCase() +
              link.to.slice(1).replaceAll("-", " ")}
          </Link>
        ))}
      </nav>
      Copyright © 2022{" "}
      <Link
        href="https://github.com/sergiojunior13"
        target="_blank"
        className="text-orange-500 font-semibold"
      >
        Sérgio Júnior
      </Link>
      . All rights reserved.
    </footer>
  );
}