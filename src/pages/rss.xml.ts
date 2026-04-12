import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Dwight Watson's Blog",
    description:
      "A blog on Laravel, Ruby on Rails & general web development, by Dwight Watson.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/posts/${post.data.slug}`,
    })),
  });
}
