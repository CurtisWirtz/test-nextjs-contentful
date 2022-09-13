import PostDetails from "../../components/data/details/PostDetails";
import { getPosts } from "../../datalayer";

const PostDetailsPage = ({ post }) => {
  return <PostDetails post={post} />;
};

export default PostDetailsPage;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const slugs = posts.map(post => post.slug);
  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const posts = await getPosts();
  const post = posts.filter(post => post.slug === slug)[0];

  return {
    props: {
      post
    }
  };
};
