import { MetadataRoute } from "next";
import { compareDesc } from "date-fns";
import { kebabCase } from "lodash";
import { allPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const tags = allPosts
    .flatMap((post) => post.tags)
    .filter((x) => x)
    .map((tag) => kebabCase(tag));

  const uniqueTags = Array.from(new Set(tags));

  const postUrls = posts.map((post) => ({
    url: `/posts/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const tagUrls = uniqueTags.map((tag) => {
    const posts = allPosts
      .filter((post) => post.tags?.map((tag) => kebabCase(tag)).includes(tag))
      .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

    return {
      url: `/tags/${tag}`,
      lastModified: new Date(posts[0].date),
    };
  });

  return [
    {
      url: "/",
      lastModified: new Date(posts[0].date),
    },
  ]
    .concat(postUrls)
    .concat(tagUrls);
}
