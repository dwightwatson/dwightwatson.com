import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPosts } from "app/db/posts";
import Tags from "@/components/tags";
import Date from "@/components/date";
import Outdated from "@/components/outdated";
import Mdx from "@/components/mdx";
import Links from "@/components/links";

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
        <h1 className="font-serif text-4xl break-words">{post.data.title}</h1>
        <Date date={post.data.date} className="text-sm" />
      </div>

      {post.data.tags?.length && (
        <Tags tags={post.data.tags} className="mb-8" />
      )}

      <Outdated date={post.data.date} />

      <div className="prose md:prose-lg prose-a:text-cyan-700 prose-a:underline prose-a:font-semibold prose-a:decoration-cyan-500 prose-a:underline-offset-2 mb-8">
        <Mdx source={post.content} />
      </div>

      <Links className="lg:hidden border-t border-gray-200 mt-8" />
    </>
  );
}
