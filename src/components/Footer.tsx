import Link from "next/link";
import Image from "next/image";
import { links } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 flex flex-col text-white/80 p-4 gap-8 text-center text-xs">
      <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none place-items-center max-w-5xl mx-auto">
        <Link href="/">
          <Image alt="site-logo" src="/logo-white.png" width={100} height={100} className="w-20" />
        </Link>
        <div className="text-start">
          <nav className="grid grid-cols-2 gap-6 text-orange-500 text-sm [&_div]:flex [&_div]:flex-col">
            <div>
              <label className="text-zinc-600 mt-2 text-xs">Tools</label>
              {links.map(({ name, to }) => (
                <Link key={to} href={to}>
                  {name.toLowerCase().charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              ))}
            </div>
            <div>
              <label className="text-zinc-600 mt-2 text-xs">Blog</label>
              <Link href="/blog">Blog</Link>
              <label className="text-zinc-600 mt-2 text-xs">Policies</label>
              <Link href="/privacy" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="/terms" prefetch={false}>
                Terms of Service
              </Link>
            </div>
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
