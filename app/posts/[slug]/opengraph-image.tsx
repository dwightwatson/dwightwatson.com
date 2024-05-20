import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }) {
  const post = await fetch(
    `https://www.dwightwatson.com/api/posts/${params.slug}`,
  ).then((res) => res.json());

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
        <div style={{ fontSize: 64, lineClamp: 2 }}>{post.data.data.title}</div>
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
