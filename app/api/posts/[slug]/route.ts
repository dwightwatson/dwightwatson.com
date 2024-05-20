import { getPosts } from "@/app/db/posts";
import { type NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  const post = getPosts().find((post) => post.data.slug === slug);

  return Response.json({ data: post });
}
