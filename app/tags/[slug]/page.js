import { allPosts } from "contentlayer/generated";
import Bio from "../../../components/bio";
import Post from "../../../components/post";
import { kebabCase } from "lodash";

export default async function Page({ params }) {
  const tag = params.slug;
  const posts = allPosts.filter((post) =>
    post.tags?.map((tag) => kebabCase(tag)).includes(tag)
  );

  const tagHeader = `${posts.length} post${posts.length === 1 ? "" : "s"}`;

  return (
    <>
      <div className="mb-4">
        <h1 className="font-serif text-2xl bread-words">#{tag}</h1>
        <small>{tagHeader}</small>
      </div>

      <ul className="mb-8">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>

      <Bio />
    </>
  );
}

export async function generateStaticParams() {
  const tags = allPosts
    .flatMap((post) => post.tags)
    .filter((x) => x)
    .map((tag) => kebabCase(tag));

  const uniqueTags = new Set(tags);

  return Array.from(uniqueTags).map((tag) => ({
    slug: tag,
  }));
}
