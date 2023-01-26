import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  BoundingBox,
  Cube,
  Funnel,
  List,
  PaintBrushBroad,
} from "phosphor-react";
import Gradient from "../../pages/gradient-generator";
import Filter from "../../pages/filter-generator";
import BoxShadow from "../../pages/box-shadow-generator";
import BorderRadius from "../../pages/border-radius-generator";

export const links = [
  {
    element: <Filter />,
    to: "filter-generator",
    name: "Filter Generator",
    Icon: Funnel,
  },
  {
    element: <BoxShadow />,
    to: "box-shadow-generator",
    name: "Box Shadow Generator",
    Icon: Cube,
  },
  {
    element: <Gradient />,
    to: "gradient-generator",
    name: "Gradient Generator",
    Icon: PaintBrushBroad,
  },
  {
    element: <BorderRadius />,
    to: "border-radius-generator",
    name: "Border Radius Generator",
    Icon: BoundingBox,
  },
];
function Header() {
  return (
    <header
      translate="no"
      className="w-full bg-blue-fade flex justify-between p-2 px-4"
    >
      <Link href="/">
        <h1 className="text-4xl font-bold text-white">CSS Tools</h1>
      </Link>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger title="menu">
          <List size={24} color="#fff" weight="bold" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-zinc-100 rounded-md overflow-hidden z-50 shadow-lg mx-1 py-1">
            {links.map(({ to }) => (
              <DropdownMenu.Item
                key={to}
                className="outline-0 hover:bg-blue-500 hover:text-white px-3"
              >
                <Link href={to} className="inline-block w-full">
                  {to.charAt(0).toUpperCase() +
                    to.slice(1).replaceAll("-", " ")}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
}

export default Header;
