import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ipindia.ai — AI-powered IP Intelligence",
  description: "Weekly IP India Gazette extraction + RAG similarities, watchlists, and competitive insights.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://ipindia.ai"),
  openGraph: {
    title: "ipindia.ai — AI-powered IP Intelligence",
    description: "Patent insights & watch services for India and beyond.",
    url: "https://ipindia.ai",
    siteName: "ipindia.ai",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
