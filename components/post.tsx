import Link from "next/link";
import Date from "./date";
import Tags from "./tags";

export default function Post({ post }) {
  return (
    <article className="mb-4">
      <Date date={post.date} className="text-gray-700" />
      <h2>
        <Link
          className="font-serif text-2xl text-blue-700 hover:underline decoration-blue-300"
          href={`/posts/${post.slug}`}
        >
          {post.title}
        </Link>
      </h2>
      {post.tags?.length && (
        <Tags tags={post.tags} className="mt-1 text-gray-700" />
      )}
    </article>
  );
}
