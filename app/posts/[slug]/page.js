import { getActualPostBySlug, getActualSlugs } from "../../../lib/api";
import Bio from "../../../components/bio";
import Tag from "../../../components/tag";
import markdown from "../../../lib/markdown";
import { formatDate } from "../../../lib/dates";

export default async function Page({ params }) {
  const post = getActualPostBySlug(params.slug, [
    "title",
    "date",
    "content",
    "tags",
    "slug",
  ]);

  const content = await markdown(post.content);

  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl break-words">{post.title}</h1>
        <small>{formatDate(post.date)}</small>
      </div>

      {post.tags.length && (
        <div className="mb-8">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      )}

      <div
        className="prose prose-lg prose-a:text-blue-700 mb-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />

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
