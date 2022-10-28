import Link from "next/link";
import { formatDate } from "../lib/dates";

export default function Post({ post }) {
  return (
    <div className="mb-12">
      <div className="mb-4">
        <small>{formatDate(post.date)}</small>
        <h3>
          <Link
            className="text-xl text-blue-700 hover:underline decoration-blue-300"
            href={`/posts/${post.slug}`}
          >
            {post.title}
          </Link>
        </h3>
      </div>

      <p
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </div>
  );
}
