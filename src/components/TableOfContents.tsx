import { RefObject, useEffect, useState } from "react";
import Toc from "react-toc";
import {} from "next";

interface TableOfContentsProps {
  articleRef: RefObject<HTMLDivElement>;
}

type Heading = {
  text: string;
  level: number;
};

export default function TableOfContents({ articleRef }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const markdown =
    headings
      .map(heading => `\n${"#".repeat(heading.level - 1)} ${heading.text}`)
      .join("") + "\n";

  useEffect(() => {
    if (!articleRef.current) return;

    const headingElements = Array.from(
      articleRef.current.querySelectorAll<HTMLHeadingElement>("h2, h3")
    );
    setHeadings(
      headingElements.map(heading => {
        return {
          text: heading.innerText,
          level: Number(heading.tagName.substring(1)),
        };
      })
    );
  }, []);

  return (
    <Toc
      markdownText={markdown}
      className="flex flex-col max-h-[50vh] overflow-y-scroll gap-2 p-0 text-zinc-400 text-sm [&_ul]:pl-10 [&_li:hover]:text-orange-600 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700"
    />
  );
}
