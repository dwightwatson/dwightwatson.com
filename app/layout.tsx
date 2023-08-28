import { Atkinson_Hyperlegible, League_Spartan } from "next/font/google";
import Header from "@/components/header";
import Script from "next/script";
import "tailwindcss/tailwind.css";

const leagueSpartan = League_Spartan({
  weight: "400",
  subsets: ["latin"],
  variable: "--league-spartan",
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--atkinson-hyperlegible",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${atkinsonHyperlegible.variable} ${leagueSpartan.variable} bg-white text-black}`}
    >
      <head>
        <link rel="icon" href="/tsunami.png" type="image/png" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-E6YFFSYMLD');
        `}
        </Script>
      </head>
      <body className="font-sans">
        <div className="border-t-4 border-blue-600 selection:bg-blue-600 selection:text-white">
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
