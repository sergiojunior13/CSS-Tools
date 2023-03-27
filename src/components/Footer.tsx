import Link from "next/link";
import Image from "next/image";
import { links } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 flex flex-col text-white/80 p-4 gap-8 text-center text-xs">
      <div className="grid grid-cols-2 place-items-center">
        <Image
          alt="site-logo"
          src="/logo-white.png"
          width={100}
          height={100}
          className="w-20"
        />
        <div className="text-start">
          <label className="text-lg font-semibold text-zinc-600">Menu</label>
          <nav className="flex flex-col gap-1 text-orange-500">
            {links.map(link => (
              <Link key={link.to} href={link.to}>
                {link.to.charAt(0).toUpperCase() +
                  link.to.slice(1).replaceAll("-", " ")}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p>
        Copyright © 2023{" "}
        <Link
          href="https://github.com/sergiojunior13"
          target="_blank"
          className="text-orange-500 font-semibold"
        >
          Sérgio Júnior
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}
