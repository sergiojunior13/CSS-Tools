import { ArticleJsonLd, NextSeo } from "next-seo";
import PostPreview from "../../src/components/blog/PostPreview";
import ColorText from "../../src/components/ColorText";
import SearchToolbar from "../../src/components/SearchToolbar";

export default function Blog() {
  return (
    <main className="bg-zinc-800">
      <NextSeo
        title="Blog | CSS Tools"
        description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
      />
      <ArticleJsonLd
        type="Blog"
        title="Blog | CSS Tools"
        url="https://tools-css.vercel.app/blog"
        images={["https://tools-css.vercel.app/CSS%20Tools%201280x1280.png"]}
        authorName="CSS Tools"
        datePublished="2023-04-12T00:00:00.000Z"
        description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
      />
      <div
        id="home"
        className="h-[70vh] md:h-[50vh] flex flex-col items-center justify-center text-center p-5 bg-background bg-opacity-5 bg-zinc-700"
      >
        <ColorText
          Variant="span"
          className="text-base font-semibold tracking-widest uppercase"
        >
          Blog
        </ColorText>
        <h1 className="text-4xl font-extrabold uppercase text-zinc-50">
          Find the best tips for better designs
        </h1>
      </div>
      <div className="flex justify-center py-10 p-5 bg-zinc-900">
        <div className="max-w-4xl flex flex-col items-center gap-20 justify-center">
          <SearchToolbar />
          <div className="flex w-full">
            <TimeLine />
            <div className="flex flex-col gap-3">
              <PostPreview />
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TimeLine() {
  return <div className="h-full w-4 rounded-lg bg-zinc-700 md:mr-10 mr-3" />;
}
