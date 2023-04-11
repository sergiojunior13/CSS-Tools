import { ReactNode, useEffect, useRef, useState } from "react";
import TableOfContents from "../../../src/components/TableOfContents";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Post() {
  useEffect(() => {
    setIsMobile(window.screen.width < 768);
  }, []);

  const { query, asPath } = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const url = "https://tools-css.vercel.app/" + asPath.slice(1);

  const postName = query["post-name"]
    ?.toString()
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex md:flex-row flex-col-reverse justify-between md:py-14 py-6 px-5 text-zinc-50 bg-zinc-900 w-full max-w-screen-2xl relative">
      <NextSeo
        title={`${postName} - CSS Tools Blog`}
        description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
        openGraph={{ url: url }}
      />
      <ArticleJsonLd
        type="Article"
        title={`${postName} - CSS Tools Blog`}
        url={url}
        images={["https://tools-css.vercel.app/CSS%20Tools%201280x1280.png"]}
        authorName="CSS Tools"
        datePublished="2023-04-12T00:00:00.000Z"
        description="Find the best tips and ideas for better designs. Enhance your website CSS with amazing tips!"
      />
      {!isMobile && (
        <aside className="w-1/5 sticky top-1/2 -translate-y-1/2 self-start h-[70vh] p-5">
          <div className="ad h-full w-full bg-zinc-700">Ad</div>
        </aside>
      )}
      <article
        className="text-zinc-300 text-lg md:w-3/5 max-w-3xl"
        ref={articleRef}
      >
        <div className="ad w-full h-48 bg-zinc-700 mb-5">Ad</div>
        <time
          dateTime="2023-03-28T14:30:00.000Z"
          className="md:text-sm text-base text-zinc-400"
        >
          Sunday, October 19, 2023
        </time>
        <PostHeading heading="h1">
          {postName
            ? postName?.charAt(0) + postName?.slice(1).toLowerCase()
            : "Post Title"}
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          animi debitis aliquam excepturi eveniet nesciunt vitae. Possimus, ad,
          maiores consequatur qui iusto doloremque deleniti, ex tempore
          consequuntur doloribus distinctio facilis.
        </p>

        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <PostHeading heading="h2">Sub Heading 1</PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, expedita
          accusamus deleniti nobis sapiente earum ipsa quos suscipit iure eum
          unde veniam velit iusto ullam repellendus aspernatur dolor, tempora
          neque!
        </p>
        <PostHeading heading="h3">Sub sub Heading 1</PostHeading>
        <PostHeading heading="h3">Sub sub Heading 2</PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          deleniti molestiae quis molestias, unde dolores architecto, vero
          accusamus perferendis incidunt ab, necessitatibus est? Eaque nemo in
          natus hic commodi nisi accusantium ipsum amet ad officia optio non
          ducimus similique dolorum sed, repudiandae fugiat consequuntur quo est
          eveniet, accusamus totam rerum illum nulla? Nemo modi delectus ea
          dignissimos voluptatibus rerum nulla! Voluptatem quibusdam tempora
          animi! Odit, vitae rem at quisquam tenetur accusamus quo sit minima
          voluptatem architecto obcaecati ipsum modi nisi similique, quia nulla
          ex dolorem fugiat debitis alias fugit nesciunt repudiandae! Vitae
          iste, voluptate, repudiandae cum ut praesentium recusandae deserunt,
          debitis aperiam similique pariatur quas numquam et iusto maiores
          possimus quaerat saepe laudantium facilis labore exercitationem
          eligendi? Eum, consequuntur perspiciatis.
        </p>

        <PostHeading heading="h2">Sub Heading 2</PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          deleniti molestiae quis molestias, unde dolores architecto, vero
          accusamus perferendis incidunt ab, necessitatibus est? Eaque nemo in
          natus hic commodi nisi accusantium ipsum amet ad officia optio non
          ducimus similique dolorum sed, repudiandae fugiat consequuntur quo est
          eveniet, accusamus totam rerum illum nulla? Nemo modi delectus ea
          dignissimos voluptatibus rerum nulla! Voluptatem quibusdam tempora
          animi! Odit, vitae rem at quisquam tenetur accusamus quo sit minima
          voluptatem architecto obcaecati ipsum modi nisi similique, quia nulla
          ex dolorem fugiat debitis alias fugit nesciunt repudiandae! Vitae
          iste, voluptate, repudiandae cum ut praesentium recusandae deserunt,
          debitis aperiam similique pariatur quas numquam et iusto maiores
          possimus quaerat saepe laudantium facilis labore exercitationem
          eligendi? Eum, consequuntur perspiciatis.
        </p>
        <PostHeading heading="h3">Lorem ipsum dolor</PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          dolorem recusandae porro cupiditate vel harum magnam dicta delectus,
          ea nulla aliquid quaerat dolore vero minus beatae soluta fugit illo
          quidem!
        </p>

        <PostHeading heading="h2">Sub Heading 3</PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          deleniti molestiae quis molestias, unde dolores architecto, vero
          accusamus perferendis incidunt ab, necessitatibus est? Eaque nemo in
          natus hic commodi nisi accusantium ipsum amet ad officia optio non
          ducimus similique dolorum sed, repudiandae fugiat consequuntur quo est
          eveniet, accusamus totam rerum illum nulla? Nemo modi delectus ea
          dignissimos voluptatibus rerum nulla! Voluptatem quibusdam tempora
          animi! Odit, vitae rem at quisquam tenetur accusamus quo sit minima
          voluptatem architecto obcaecati ipsum modi nisi similique, quia nulla
          ex dolorem fugiat debitis alias fugit nesciunt repudiandae! Vitae
          iste, voluptate, repudiandae cum ut praesentium recusandae deserunt,
          debitis aperiam similique pariatur quas numquam et iusto maiores
          possimus quaerat saepe laudantium facilis labore exercitationem
          eligendi? Eum, consequuntur perspiciatis.
        </p>

        <PostHeading heading="h2">sub Heading 4</PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          deleniti molestiae quis molestias, unde dolores architecto, vero
          accusamus perferendis incidunt ab, necessitatibus est? Eaque nemo in
          natus hic commodi nisi accusantium ipsum amet ad officia optio non
          ducimus similique dolorum sed, repudiandae fugiat consequuntur quo est
          eveniet, accusamus totam rerum illum nulla? Nemo modi delectus ea
          dignissimos voluptatibus rerum nulla! Voluptatem quibusdam tempora
          animi! Odit, vitae rem at quisquam tenetur accusamus quo sit minima
          voluptatem architecto obcaecati ipsum modi nisi similique, quia nulla
          ex dolorem fugiat debitis alias fugit nesciunt repudiandae! Vitae
          iste, voluptate, repudiandae cum ut praesentium recusandae deserunt,
          debitis aperiam similique pariatur quas numquam et iusto maiores
          possimus quaerat saepe laudantium facilis labore exercitationem
          eligendi? Eum, consequuntur perspiciatis.
        </p>
        <footer>
          <div className="ad w-full h-48 bg-zinc-700 mt-5">Ad</div>
        </footer>
      </article>
      {!isMobile && (
        <nav className="flex flex-col gap-4 w-1/5 p-5 sticky top-14 self-start">
          <label className="text-xl font-semibold">Quick Nav</label>
          <TableOfContents articleRef={articleRef} />
          <div className="ad bg-zinc-700 w-full h-[30vh]">Ad</div>
        </nav>
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
