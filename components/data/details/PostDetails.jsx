import React from "react";
import Image from "next/image";

const PostDetails = ({ post }) => {
  console.log(post);
  return (
    <>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <Image src={post.image.url} alt={post.image.alt} width={post.image.width} height={post.image.height} />
    </>
  );
};

export default PostDetails;
