import Link from "next/link";
import Date from "./date";
import Tags from "./tags";

export default function Post({ post }) {
  return (
    <article className="mb-4">
      <Date date={post.data.date} className="text-gray-700" />
      <h2>
        <Link
          className="font-serif text-2xl text-cyan-700 hover:underline decoration-cyan-300 break-words"
          href={`/posts/${post.data.slug}`}
        >
          {post.data.title}
        </Link>
      </h2>
      {post.data.tags?.length && (
        <Tags tags={post.data.tags} className="mt-1 text-gray-700" />
      )}
    </article>
  );
}
