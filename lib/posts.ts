import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPostsNames() {
  return fs
    .readdirSync(postsDirectory)
    .map(
      postName =>
        `${process.env.NEXT_PUBLIC_URL}blog/${postName.replace(/\.md$/, "")}/`
    );
}

function getAllPostsData() {
  const postNames = fs.readdirSync(postsDirectory);
  const allPostsData = postNames.map(postName => {
    const fullPath = path.join(postsDirectory, postName);
    const id = postName.replace(/\.md$/, "");

    const postContent = fs.readFileSync(fullPath, "utf8");

    return { id, ...matter(postContent) };
  });

  return allPostsData;
}

export function getPostData(id: string) {
  const postPath = path.join(postsDirectory, id + ".md");

  try {
    const postData = fs.readFileSync(postPath, "utf8");
    return matter(postData);
  } catch (error) {
    return false;
  }
}

export function getPostsPreview() {
  return getAllPostsData()
    .map(postData => {
      return { id: postData.id, data: postData.data };
    })
    .sort((a, b) => {
      if (a.data.date < b.data.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
