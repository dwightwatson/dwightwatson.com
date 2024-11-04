import { notFound } from "next/navigation";
import { getPosts } from "app/db/posts";

import Bio from "@/components/bio";
import Tags from "@/components/tags";
import Date from "@/components/date";
import Outdated from "@/components/outdated";
import Mdx from "@/components/mdx";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.data.slug,
  }));
}

export async function generateMetadata(props): Promise<Metadata> {
  const params = await props.params;
  const post = getPosts().find((post) => post.data.slug === params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.data.title,
    description: post.content.substring(0, 100),
    openGraph: {
      title: post.data.title,
      description: post.content.substring(0, 100),
      type: "article",
      publishedTime: post.data.date,
    },
  };
}

export default async function Page(props) {
  const params = await props.params;
  const post = getPosts().find((post) => post.data.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-serif text-2xl break-words">{post.data.title}</h1>
        <Date date={post.data.date} className="text-sm" />
      </div>

      {post.data.tags?.length && (
        <Tags tags={post.data.tags} className="mb-8" />
      )}

      <Outdated date={post.data.date} />

      <div className="prose md:prose-lg prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline prose-a:decoration-blue-300  mb-8">
        <Mdx source={post.content} />
      </div>

      <Bio />
    </>
  );
}
