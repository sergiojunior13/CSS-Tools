import { GetServerSidePropsContext } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";
import { getAllPostsData } from "../../../lib/posts";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const postsData = getAllPostsData();
  const postsURLAndDate = postsData.map(postData => {
    return { postURL: postData.postURL, date: postData.data.date };
  });

  fetch(
    "https://www.google.com/ping?sitemap=https://tools-css.vercel.app/blog/blog-sitemap.xml"
  ).catch(error => console.log(error));

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
