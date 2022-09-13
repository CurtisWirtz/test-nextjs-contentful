import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-html-renderer";

const PostDetails = ({ post }) => {
  //   console.log(post);

  //   const richText = post.content;
  //   console.log(richText);

  return (
    <>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <Image src={post.image.url} alt={post.image.alt} width={post.image.width} height={post.image.height} />
      {post.copy}
      {/* {documentToReactComponents(richText)} */}
    </>
  );
};

export default PostDetails;
