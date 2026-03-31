import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeContext";
import MouseDot from "../components/MouseDot";

export const metadata: Metadata = {
  title: {
    default: "SiteDesign | Web Design Coimbatore",
    template: "%s | SiteDesign", // ← About page becomes "About | SiteDesign"
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