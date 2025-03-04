import { Atkinson_Hyperlegible, League_Spartan } from "next/font/google";
import Header from "@/components/header";
import Script from "next/script";
import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      className={`${atkinsonHyperlegible.variable} ${leagueSpartan.variable} bg-white text-black`}
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
      <body className="font-sans selection:bg-cyan-600 selection:text-white p-6 lg:p-12 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <header className="lg:sticky top-12 h-fit">
            <Header />
          </header>

          <main className="flex-1 max-w-prose">{children}</main>
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
