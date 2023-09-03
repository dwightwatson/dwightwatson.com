import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import Bio from "@/components/bio";
import Tags from "@/components/tags";
import Date from "@/components/date";
import Outdated from "@/components/outdated";
import Mdx from "@/components/mdx";
import type { Metadata } from "next";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.body.raw.substring(0, 100),
    openGraph: {
      title: post.title,
      description: post.body.raw.substring(0, 100),
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function Page({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="mb-4">
        <h1 className="font-serif text-2xl break-words">{post.title}</h1>
        <Date date={post.date} className="text-sm" />
      </div>

      {post.tags?.length && <Tags tags={post.tags} className="mb-8" />}

      <Outdated date={post.date} />

      <div className="prose md:prose-lg mb-8">
        <Mdx code={post.body.code} />
      </div>

      <Bio />
    </>
  );
}
