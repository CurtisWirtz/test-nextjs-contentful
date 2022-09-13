import { client } from "./client";
import { postReducer } from "./utils";

export const getPosts = async () => {
  const res = await client.getEntries({ content_type: "blogPosts" });
  const rawPosts = res.items;

  // console.log(rawPosts);

  const posts = rawPosts.map(rawPost => {
    // console.log(rawPost);
    // post.fields.blogPosts = [];
    return postReducer(rawPost);
  });

  return posts;
};
