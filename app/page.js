import Bio from "../components/bio";
import Post from "../components/post";
import { getAllPosts } from "../lib/api";

export default async function Home() {
  const posts = await getAllPosts(["title", "date", "slug", "content"]);

  return (
    <div>
      <Bio />

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  );
}
