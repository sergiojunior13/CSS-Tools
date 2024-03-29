import { ReactNode, useRef } from "react";

import { ArticleJsonLd, NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";

import { GrayMatterFile } from "gray-matter/gray-matter";
// @ts-ignore
import ReactMarkdown from "react-markdown";
import { Code, CopyBlock, ocean } from "react-code-blocks";

import { getPostData } from "../../../lib/posts";
import TableOfContents from "../../../src/components/TableOfContents";

import useIsMobile from "../../../hooks/useIsMobile";
import dayjs from "dayjs";

interface postDataProps extends GrayMatterFile<string> {
  data: {
    date: string;
    title: string;
    excerpt: string;
  };
}

const rootUrl = process.env.NEXT_PUBLIC_URL;

export default function Post({ content, data }: postDataProps) {
  const { isMobile } = useIsMobile();

  const { title, date } = data;

  const { asPath } = useRouter();
  const url = rootUrl + asPath.slice(1);

  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-zinc-50 bg-zinc-900">
      <main className="max-w-screen-2xl mx-auto w-full flex md:flex-row flex-col-reverse justify-between md:py-14 py-6 px-5 relative">
        <NextSeo
          title={`${title} - CSS Tools Blog`}
          description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
          openGraph={{ url: url, title }}
          canonical={url}
        />
        <ArticleJsonLd
          type="Article"
          title={`${title} - CSS Tools Blog`}
          url={url}
          images={[`${rootUrl}CSS%20Tools%201280x1280.png`]}
          authorName="CSS Tools"
          datePublished="2023-04-12T00:00:00.000Z"
          description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
        />
        {!isMobile && (
          <aside className="flex items-center justify-center w-1/5 sticky h-screen top-0 self-start px-5"></aside>
        )}
        <article
          className="text-zinc-300 text-lg md:w-3/5 max-w-3xl whitespace-pre-wrap  flex flex-col"
          ref={articleRef}
        >
          <time dateTime={dayjs(date).toISOString()} className="md:text-sm text-base text-zinc-400">
            {dayjs(date).format("dddd, MMMM DD, YYYY")}
          </time>
          <PostHeading heading="h1">
            {title
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </PostHeading>
          <ReactMarkdown
            components={{
              a({ children, href, node, ...props }) {
                if (!href) return <a {...props}>{children}</a>;
                return (
                  <Link href={href} className="text-orange-500 underline">
                    {children}
                  </Link>
                );
              },
              h2({ children }) {
                return <PostHeading heading="h2" children={children} />;
              },
              h3({ children }) {
                return <PostHeading heading="h3" children={children} />;
              },
              code({ children, className, onCopy, ...props }) {
                const language = /language-(\w+)/.exec(className || "");
                let text = children?.toString() || "";

                return (
                  <Code
                    text={text}
                    language={language ? language[1] : "css"}
                    theme={ocean}
                    customStyle={{ fontSize: "14px" }}
                    {...props}
                  />
                );
              },
              pre({ children, node, className, onCopy, ...props }) {
                const language = /language-(\w+)/.exec(className || "");
                // @ts-ignore
                let text = node?.children[0].children[0].value || "";
                text = text?.slice(0, -1);

                return (
                  <CopyBlock
                    {...props}
                    wrapLongLines
                    customStyle={{
                      marginTop: "8px",
                      marginBottom: "8px",
                      fontSize: "14px",
                    }}
                    text={text}
                    language={language ? language[1] : "css"}
                    theme={ocean}
                  />
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
        {!isMobile && (
          <aside className="flex flex-col w-1/5 px-2 sticky top-0 h-screen self-start">
            <nav className="flex h-full flex-col gap-4">
              <div className="pb-4">
                <label className="text-xl font-semibold">Quick Nav</label>
                <TableOfContents articleRef={articleRef} />
              </div>
            </nav>
          </aside>
        )}
      </main>
    </div>
  );
}

interface PostHeadingProps {
  heading: "h1" | "h2" | "h3";
  children: ReactNode;
}

function PostHeading({ heading, children }: PostHeadingProps) {
  if (!children) return null;

  const id = children.toString().toLowerCase().replaceAll(" ", "-");

  switch (heading) {
    case "h1":
      return (
        <h1 className="text-orange-600 text-4xl font-bold mb-2 mt-1 first-letter:uppercase">
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className="text-zinc-50 md:text-2xl text-3xl font-semibold mt-8 mb-2 first-letter:uppercase"
          id={id}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className="text-zinc-50 md:text-xl text-2xl font-semibold mt-5 mb-1 first-letter:uppercase"
          id={id}
        >
          {children}
        </h3>
      );
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const slug = context.params["post-name"];

  const postData = getPostData(slug);
  if (!postData) return { notFound: true };

  return {
    props: {
      content: postData.content,
      data: postData.data,
    },
  };
}
