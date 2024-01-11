import { RefObject, useEffect, useState } from "react";

type Heading = {
  text: string;
  level: number;
};

function transformHeadingElementsToHeadingObjects(
  headingElements: HTMLHeadingElement[]
) {
  return headingElements.map(({ innerText, tagName }) => {
    return {
      text: innerText,
      level: getHeadingLevelByTagName(tagName),
    };
  });
}

function getHeadingLevelByTagName(tagName: string) {
  return Number(tagName.substring(1));
}

function transformHeadingsToMarkdown(headings: Heading[]) {
  return (
    headings
      .map(heading => `\n${"#".repeat(heading.level - 1)} ${heading.text}`)
      .join("") + "\n"
  );
}

export default function getMarkdownByRef(ref: RefObject<HTMLDivElement>) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (!ref.current) return;

    const headingElements = Array.from(
      ref.current.querySelectorAll<HTMLHeadingElement>("h2, h3")
    );

    const headings: Heading[] =
      transformHeadingElementsToHeadingObjects(headingElements);

    setMarkdown(transformHeadingsToMarkdown(headings));
  }, []);

  return markdown;
}
