import { ReactNode, useEffect, useRef, useState } from "react";
import TableOfContents from "../../../src/components/TableOfContents";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getPostData } from "../../../lib/posts";
import dayjs from "dayjs";
import matter from "gray-matter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Code, CopyBlock, dracula } from "react-code-blocks";
import Link from "next/link";

interface postDataProps extends matter.GrayMatterFile<string> {
  data: {
    date: string;
    title: string;
    excerpt: string;
  };
}

const rootUrl = process.env.NEXT_PUBLIC_URL;

export default function Post({ content, data }: postDataProps) {
  useEffect(() => {
    const toMobile = () => setIsMobile(window.innerWidth < 768);

    toMobile();

    window.addEventListener("resize", toMobile);

    return () => window.removeEventListener("resize", toMobile);
  }, []);

  const { title, date } = data;

  const { asPath } = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const url = rootUrl + asPath.slice(1);

  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex md:flex-row flex-col-reverse justify-between md:py-14 py-6 px-5 text-zinc-50 bg-zinc-900 w-full max-w-screen-2xl relative">
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
        <aside className="w-1/5 sticky top-5 self-start h-[70vh] px-5">
          {/* <div className="ad h-full w-full"></div> */}
        </aside>
      )}
      <article
        className="text-zinc-300 text-lg md:w-3/5 max-w-3xl whitespace-pre-wrap"
        ref={articleRef}
      >
        {/* <div className="ad w-full h-48 mb-5"></div> */}
        <time
          dateTime="2023-03-28T14:30:00.000Z"
          className="md:text-sm text-base text-zinc-400"
        >
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
            a({ children, href, ...props }) {
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
            code({ children, inline, className, ...props }) {
              const language = /language-(\w+)/.exec(className || "");

              return inline ? (
                <Code
                  {...props}
                  text={children}
                  language={language ? language[1] : "css"}
                  theme={dracula}
                />
              ) : (
                <CopyBlock
                  {...props}
                  customStyle={{ marginTop: "8px", marginBottom: "8px" }}
                  text={children}
                  language={language ? language[1] : "css"}
                  theme={dracula}
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
        <footer>{/* <div className="ad w-full h-48 mt-5"></div> */}</footer>
      </article>
      {!isMobile && (
        <aside className="flex flex-col gap-4 w-1/5 p-5 sticky top-14 self-start">
          <nav className="flex flex-col gap-4">
            <label className="text-xl font-semibold">Quick Nav</label>
            <TableOfContents articleRef={articleRef} />
            {/* <div className="ad w-full h-[30vh]"></div> */}
          </nav>
        </aside>
      )}
    </main>
  );
}

interface PostHeadingProps {
  heading: "h1" | "h2" | "h3";
  children: ReactNode;
  // setHeadings: Dispatch<SetStateAction<Headings>>;
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
