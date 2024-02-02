import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostsData() {
  const postNames = fs.readdirSync(postsDirectory);
  const allPostsData = postNames.map(postName => {
    const fullPath = path.join(postsDirectory, postName);
    const id = postName.replace(/\.md$/, "");

    const postURL = `${process.env.NEXT_PUBLIC_URL}/blog/${id}/`;
    const postContent = fs.readFileSync(fullPath, "utf8");

    return {
      postURL,
      id,
      ...matter(postContent, {
        excerpt: true,
        excerpt_separator: "<!-- end -->",
      }),
    };
  });

  return allPostsData;
}

export function getPostData(id: string) {
  const postPath = path.join(postsDirectory, id + ".md");

  try {
    const postData = fs
      .readFileSync(postPath, "utf8")
      .replace("<!-- end -->", "");
    return matter(postData);
  } catch (error) {
    return false;
  }
}

export function getPostsPreview() {
  return getAllPostsData().map(postData => {
    return {
      id: postData.id,
      data: postData.data,
      excerpt: postData.excerpt,
    };
  });
}
