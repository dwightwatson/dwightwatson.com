import Bio from "@/components/bio";
import Post from "@/components/post";
import { compareDesc } from "date-fns";
import { getPosts } from "app/db/posts";

export const metadata = {
  title: "Dwight Watson's Blog",
  description:
    "A blog on Laravel, Ruby on Rails & general web development, by Dwight Watson.",
};

export default function Home() {
  const posts = getPosts().sort((a, b) =>
    compareDesc(new Date(a.data.date), new Date(b.data.date))
  );

  return (
    <div>
      <Bio />

      <div className="flex flex-col gap-8 mb-8">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
