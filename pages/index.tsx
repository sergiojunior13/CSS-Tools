import { links } from "../src/components/Header";
import ColorText from "../src/components/ColorText";
import Link from "next/link";
import { CaretDown } from "phosphor-react";

function App() {
  return (
    <main className="bg-zinc-800">
      <div
        id="home"
        className="h-[90vh] flex flex-col items-center justify-center p-5"
      >
        <h1 className="font-bold text-4xl text-center leading-tight text-zinc-50 mt-auto">
          Online{" "}
          <ColorText
            Variant="span"
            className="bg-clip-text bg-orange-fade text-transparent"
          >
            CSS tools
          </ColorText>{" "}
          to help you to make your website.
        </h1>
        <a className="mt-auto animate-bounce" href="#tools">
          <CaretDown size={32} color="blue" />
        </a>
      </div>
      <div id="tools" className="p-10 flex flex-col items-center">
        <ColorText className="my-10" Variant="h1">
          Tools
        </ColorText>
        <ul className="flex flex-wrap items-center justify-center sm:grid grid-cols-4 gap-4 w-[60%] mx-auto">
          {links.map(({ to, name, Icon }) => (
            <Link href={to} key={to}>
              <div
                className="tool border-blue-600 transition-colors hover:bg-blue-600 border-4 rounded-lg
             text-blue-700 hover:text-white flex flex-col items-center text-center font-semibold justify-evenly w-40 h-40 p-2"
              >
                <Icon size={64} />
                <p className="text-white">{name}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
