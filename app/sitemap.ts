import { MetadataRoute } from "next";
import { compareDesc } from "date-fns";
import { kebabCase } from "lodash";

import { getPosts } from "app/db/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().sort((a, b) =>
    compareDesc(new Date(a.data.date), new Date(b.data.date)),
  );

  const tags = getPosts()
    .flatMap((post) => post.data.tags)
    .filter((x) => x)
    .map((tag) => kebabCase(tag));

  const uniqueTags = Array.from(new Set(tags));

  const postUrls = posts.map((post) => ({
    url: `https://www.dwightwatson.com/posts/${post.data.slug}`,
    lastModified: new Date(post.data.date),
  }));

  const tagUrls = uniqueTags.map((tag) => {
    const posts = getPosts()
      .filter((post) =>
        post.data.tags?.map((tag) => kebabCase(tag)).includes(tag),
      )
      .sort((a, b) =>
        compareDesc(new Date(a.data.date), new Date(b.data.date)),
      );

    return {
      url: `https://www.dwightwatson.com/tags/${tag}`,
      lastModified: new Date(posts[0].data.date),
    };
  });

  return [
    {
      url: "https://www.dwightwatson.com",
      lastModified: new Date(posts[0].data.date),
    },
    ...postUrls,
    ...tagUrls,
  ];
}
