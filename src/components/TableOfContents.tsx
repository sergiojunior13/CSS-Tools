import { RefObject } from "react";
import Toc from "react-toc";
import useMarkdown from "../hooks/useMarkdown";

interface TableOfContentsProps {
  articleRef: RefObject<HTMLDivElement>;
}

export default function TableOfContents({ articleRef }: TableOfContentsProps) {
  const markdown = useMarkdown(articleRef);

  return (
    <Toc
      markdownText={markdown}
      className="flex flex-col max-h-[50vh] overflow-y-scroll gap-2 p-0 text-zinc-400 text-sm [&_ul]:pl-10 [&_li:hover]:text-orange-600 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-700"
    />
  );
}
