import { ArticleJsonLd, NextSeo } from "next-seo";
import PostPreview from "../../src/components/blog/PostPreview";
import ColorText from "../../src/components/ColorText";
import SearchToolbar from "../../src/components/SearchToolbar";
import { getPostsPreview } from "../../lib/posts";
import Image from "next/image";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_URL;

export default function Blog({ postsData }: { postsData: postsDataProps }) {
  const [filteredPosts, setFilteredPosts] = useState(postsData);

  return (
    <main className="bg-zinc-800">
      <NextSeo
        title="Blog | CSS Tools"
        description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
      />
      <ArticleJsonLd
        type="Blog"
        title="Blog | CSS Tools"
        url={`${url}blog`}
        images={[`${url}CSS%20Tools%201280x1280.png`]}
        authorName="CSS Tools"
        datePublished="2023-04-12T00:00:00.000Z"
        description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
      />
      <div
        id="home"
        className="relative h-[70vh] md:h-[50vh] flex flex-col items-center justify-center text-center p-5 bg-zinc-950"
      >
        <ColorText
          Variant="span"
          className="text-base font-semibold tracking-widest uppercase z-10"
        >
          Blog
        </ColorText>
        <h1 className="text-4xl font-extrabold uppercase text-zinc-50 z-10">
          Find the best tips for better designs
        </h1>

        <div className="opacity-50">
          <Image
            src="/background.jpg"
            fill
            alt="background img"
            className="object-cover pointer-events-none"
          />
        </div>
      </div>
      <div className="flex justify-center py-10 p-5 bg-zinc-900">
        <div className="max-w-4xl flex flex-col items-center gap-20 justify-center">
          <SearchToolbar
            postsData={postsData}
            setFilteredPosts={setFilteredPosts}
          />
          <div className="flex w-full">
            {filteredPosts.length > 0 && <TimeLine />}
            <div className="flex flex-col gap-3 w-full">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(({ data, id, excerpt }) => (
                  <PostPreview
                    title={data.title}
                    date={data.date}
                    excerpt={excerpt}
                    slug={id}
                    key={id}
                  />
                ))
              ) : (
                <span className="text-center text-zinc-50 text-lg font-medium">
                  No results was found :(
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TimeLine() {
  return <div className="h-full w-1 rounded-lg bg-zinc-700 md:mr-10 mr-3" />;
}

export type postsDataProps = {
  id: string;
  data: {
    date: string;
    title: string;
    tags: string[];
  };
  excerpt: string;
}[];

export async function getStaticProps() {
  const postsData = getPostsPreview();

  return {
    props: {
      postsData,
    },
  };
}
