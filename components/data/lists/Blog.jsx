import React from "react";
import BlogCard from "../cards/BlogCard";

const Blog = ({ posts }) => {
  //   console.log(posts.posts[0].fields);
  return (
    <div>
      {posts.posts.map(post => (
        <BlogCard post={post} key={post.sys.id} />
      ))}
    </div>
  );
};

export default Blog;
