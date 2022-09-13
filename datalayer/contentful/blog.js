import { client } from "./client";
import { postReducer } from "./utils";

export const getPosts = async () => {
  const posts = await client.getEntries({ content_type: "blogPosts" });
  // console.log(posts);
  posts.items.map(post => {
    post.fields.blogPosts = [];
    return post;
  });
  return posts.items;
};
