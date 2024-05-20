import { getPosts } from "@/app/db/posts";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  const post = getPosts().find((post) => post.data.slug === params.slug);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          borderTop: "1rem solid #2563eb",
          width: "100%",
          height: "100%",
          padding: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 32, color: "#2563eb" }}>dwightwatson.com</div>
        <div style={{ fontSize: 64, lineClamp: 2 }}>{post.data.title}</div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
