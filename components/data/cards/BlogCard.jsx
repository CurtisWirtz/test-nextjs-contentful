import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }) => {
  //   console.log(post);
  return (
    <>
      <div>Blog Card {post.date}</div>
      <Image src={post.image.url} alt={post.image.alt} width={post.image.width} height={post.image.height} />
      <Link href={`/post/${post.slug}`}>
        <a href={`/post/${post.slug}`}>{post.title}</a>
      </Link>
      <br />
      <br />
      <br />
    </>
  );
};

export default BlogCard;
