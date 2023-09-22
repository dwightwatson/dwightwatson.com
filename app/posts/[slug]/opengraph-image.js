import { ImageResponse } from "next/server";
import { allPosts } from "contentlayer/generated";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  // Font
  const interSemiBold = fetch(
    new URL("./Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          borderTop: "4px solid #2563eb",
          padding: "16px 32px",
        }}
      >
        <div style={{ fontSize: 86, color: "#030712", lineHeight: 1.0 }}>
          {post.title}
        </div>
        <div style={{ fontSize: 64, color: "#2563eb" }}>dwightwatson.com</div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
