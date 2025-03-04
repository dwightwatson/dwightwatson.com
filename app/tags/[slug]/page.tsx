import { Metadata } from "next";
import { notFound } from "next/navigation";
import { kebabCase } from "lodash";
import { compareDesc } from "date-fns";

import { getPosts } from "app/db/posts";
import Post from "@/components/post";

export async function generateStaticParams() {
  const tags = getPosts()
    .flatMap((post) => post.data.tags)
    .filter((x) => x)
    .map((tag) => kebabCase(tag));

  const uniqueTags = new Set(tags);

  return Array.from(uniqueTags).map((tag) => ({
    slug: tag,
  }));
}

export async function generateMetadata(props): Promise<Metadata> {
  const params = await props.params;
  const tag = params.slug;

  if (!tag) {
    return;
  }

  return {
    title: `Posts tagged #${tag}`,
    description: `The latest posts that have been tagged with #${tag}.`,
    openGraph: {
      title: `Posts tagged #${tag}`,
      description: `The latest posts that have been tagged with #${tag}.`,
    },
  };
}

export default async function Page(props) {
  const params = await props.params;
  const tag = params.slug;
  const posts = getPosts()
    .filter((post) =>
      post.data.tags?.map((tag) => kebabCase(tag)).includes(tag),
    )
    .sort((a, b) => compareDesc(new Date(a.data.date), new Date(b.data.date)));

  if (posts.length === 0) {
    notFound();
  }

  const tagHeader = `${posts.length} post${posts.length === 1 ? "" : "s"}`;

  return (
    <>
      <div className="mb-4">
        <h1 className="font-serif text-4xl break-words">#{tag}</h1>
        <small>{tagHeader}</small>
      </div>

      <div className="flex flex-col gap-8 mb-8">
        {posts.map((post) => (
          <Post key={post.data.slug} post={post} />
        ))}
      </div>
    </>
  );
}
