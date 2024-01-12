import { GetServerSidePropsContext } from "next";
// @ts-ignore
import { getServerSideSitemapLegacy } from "next-sitemap";
import { getAllPostsData } from "../../../lib/posts";

// Don't remove it
export default function GenerateSitemap() {}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const postsData = getAllPostsData();
  const postsURLAndDate = postsData.map(postData => {
    return { postURL: postData.postURL, date: postData.data.date };
  });

  return getServerSideSitemapLegacy(
    ctx,
    postsURLAndDate.map(({ date, postURL }) => {
      return {
        loc: postURL,
        lastmod: new Date(date).toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      };
    })
  );
}
