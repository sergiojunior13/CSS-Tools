import { GetServerSidePropsContext } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { getAllPostsNames } from "../../../lib/posts";

export default function GenerateSitemap() {}

export async function getServerSideProps({
  ctx,
}: {
  ctx: GetServerSidePropsContext;
}) {
  const postsURL = getAllPostsNames();

  return getServerSideSitemap(
    ctx,
    postsURL.map(postURL => {
      return {
        loc: postURL,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      };
    })
  );
}
