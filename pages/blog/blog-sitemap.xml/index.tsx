import { GetServerSidePropsContext } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";
import { getAllPostsNames } from "../../../lib/posts";

export default function GenerateSitemap() {}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const postsURL = getAllPostsNames();

  return getServerSideSitemapLegacy(
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
