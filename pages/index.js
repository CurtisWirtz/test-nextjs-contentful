import { getPosts } from "../datalayer";
import Blog from "../components/data/lists/Blog";

export default function Home(posts) {
  // console.log(posts);
  return <Blog posts={posts} />;
}

export const getStaticProps = async ctx => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};
