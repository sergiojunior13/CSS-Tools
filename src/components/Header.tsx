import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  BoundingBox,
  CaretDown,
  Cube,
  Funnel,
  PaintBrushBroad,
} from "phosphor-react";
import Gradient from "../../pages/gradient-generator";
import Filter from "../../pages/filter-generator";
import BoxShadow from "../../pages/box-shadow-generator";
import BorderRadius from "../../pages/border-radius-generator";

export const links = [
  {
    element: <Filter />,
    to: "/filter-generator",
    name: "Filter Generator",
    Icon: Funnel,
  },
  {
    element: <BoxShadow />,
    to: "/box-shadow-generator",
    name: "Box Shadow Generator",
    Icon: Cube,
  },
  {
    element: <Gradient />,
    to: "/gradient-generator",
    name: "Gradient Generator",
    Icon: PaintBrushBroad,
  },
  {
    element: <BorderRadius />,
    to: "/border-radius-generator",
    name: "Border Radius Generator",
    Icon: BoundingBox,
  },
];

export default function Header() {
  return (
    <header
      className={
        (usePathname() === "/" || usePathname() === "/blog/"
          ? "absolute top-0 "
          : "relative ") +
        "w-full flex flex-col justify-center items-center md:justify-start gap-5 p-6 md:flex-row"
      }
    >
      <Link href="/">
        <Image
          alt="site-logo"
          src={"/logo-color.png"}
          width={304}
          height={59}
          className="w-[200px]"
        />
      </Link>

      <NavMenu />
    </header>
  );
}

function NavMenu() {
  return (
    <NavigationMenu.Root className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
      <NavigationMenu.List className="flex items-center gap-4 text-2xl md:text-xl text-zinc-50">
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger className="group flex items-center gap-0.5">
            Tools
            <CaretDown
              size={16}
              weight="bold"
              className="group-data-[state=open]:rotate-180 transition-transform"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-zinc-900 text-lg rounded-lg shadow-xl shadow-zinc-900/80 mt-1 py-1 absolute top-full right-1/2 translate-x-1/2 w-max data-[motion=to-end]:opacity-0 data-[state=open]:opacity-100 opacity-0 transition-opacity">
            {links.map(({ to, name }) => (
              <NavigationMenu.Item
                key={to}
                className="list-none outline-0 hover:bg-orange-500 hover:text-white px-3"
              >
                <Link href={to} className="inline-block w-full">
                  {name.toLowerCase().charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/blog">Blog</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
