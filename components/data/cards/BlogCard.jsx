import React from "react";

const BlogCard = ({ post }) => {
  //   console.log(post);
  return (
    <>
      <div>Blog Card</div>
      <div>{post.fields.title}</div>
      <br />
    </>
  );
};

export default BlogCard;
