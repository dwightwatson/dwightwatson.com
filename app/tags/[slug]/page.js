import { getActualPostBySlug, getActualSlugs } from "../../../lib/api";
import Bio from "../../../components/bio";

export default async function Page({ params }) {
  const tag = params.slug;
  const posts = getActualPostBySlug(params.slug, [
    "title",
    "date",
    "content",
    "tags",
    "slug",
  ]);
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"}`;

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl">#{tag}</h1>
        <small>{tagHeader}</small>
      </div>

      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>

      <Bio />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getActualSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
