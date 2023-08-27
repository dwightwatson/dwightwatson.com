import Bio from "../components/bio";
import Post from "../components/post";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <Bio />

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
