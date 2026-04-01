import type { Metadata } from "next";
import Script from "next/script"; // ✅ add this
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeContext";
import MouseDot from "../components/MouseDot";

export const metadata: Metadata = {
  title: {
    default: "SiteDesign | Web Design Coimbatore",
    template: "%s | SiteDesign",
  },
  description: "Professional website design, Google Ads & Meta Ads services in Coimbatore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">

        {/* ✅ Theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (
                  localStorage.getItem('theme') === 'dark' ||
                  (!localStorage.getItem('theme') &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YK6S3GTPTB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YK6S3GTPTB');
          `}
        </Script>

        <ThemeProvider>
          <MouseDot />
          <Navbar />
          <main className="dark:bg-[#0e0e0e]">{children}</main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}