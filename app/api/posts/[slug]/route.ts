import { getPosts } from "@/app/db/posts";
import { type NextRequest } from "next/server";

export async function GET(request: Request, props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug; // 'a', 'b', or 'c'
  const post = getPosts().find((post) => post.data.slug === slug);

  return Response.json({ data: post });
}
