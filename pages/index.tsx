import { links } from "../src/components/Header";
import ColorText from "../src/components/ColorText";
import Link from "next/link";
import { CaretDown } from "phosphor-react";
import Image from "next/image";

function App() {
  return (
    <main className="bg-zinc-800">
      <div
        id="home"
        className="relative h-[100vh] flex flex-col items-center justify-center p-5 bg-zinc-950"
      >
        <h1 className="font-bold text-[2.35rem] text-center leading-tight text-zinc-50 mt-auto z-10">
          Elevate your website design with powerful{" "}
          <ColorText
            Variant="span"
            className="bg-clip-text bg-orange-fade text-transparent z-10"
          >
            CSS tools
          </ColorText>
          .
        </h1>
        <a
          className="mt-auto animate-bounce text-orange-600 z-10"
          href="#tools"
        >
          <CaretDown size={32} />
        </a>
        <div className="opacity-30">
          <Image
            src="/background.jpg"
            fill
            alt="background img"
            className="object-cover pointer-events-none"
          />
        </div>
      </div>
      <div id="tools" className="p-10 flex flex-col items-center">
        <ColorText
          Variant="span"
          className="text-base font-semibold tracking-widest uppercase"
        >
          Tools
        </ColorText>
        <h2 className="mb-10 font-bold text-4xl text-center text-zinc-50">
          See these incredible tools
        </h2>
        <ul className="flex flex-wrap items-center justify-center lg:grid grid-cols-4 gap-4 mx-auto">
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
