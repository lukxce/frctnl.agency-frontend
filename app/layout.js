import { Manrope } from "next/font/google";
import SiteNav from "./components/SiteNav";
import SmoothScroll from "./components/SmoothScroll";
import layoutStyles from "./layout.module.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.frctnl.agency";
const SITE_NAME = "Fractional";
const SITE_TITLE = "Fractional | Senior Growth Leadership That Owns the Outcome";
const SITE_DESCRIPTION =
  "Fractional steps into the growth leadership seat at early-stage startups and owns the whole go-to-market, from strategy to paid to pipeline. Senior operators who scaled a company to €40M ARR, accountable for the number, not just the work.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Fractional",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <SmoothScroll>
          <SiteNav />
          <div className={layoutStyles.shell}>{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
