import { Atkinson_Hyperlegible } from "@next/font/google";
import Header from "../components/header";
import "tailwindcss/tailwind.css";
import "highlight.js/styles/github-dark.css";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
  variable: "--atkinson-hyperlegible",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={atkinsonHyperlegible.variable}>
      <head>
        <title>All posts</title>
      </head>
      <body>
        <div className="font-sans border-t-4 border-blue-600 selection:bg-blue-600 selection:text-white">
          <div className="max-w-prose mx-auto px-4">
            <header className="py-4">
              <Header />
            </header>

            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
