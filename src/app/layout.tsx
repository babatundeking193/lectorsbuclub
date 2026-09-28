import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LectorsBuClub | A Private Literary Society & Managed Reader Experience",
  description:
    "LectorsBuClub is a private literary society and curated cultural hub. We connect brilliant independent authors with an elite global reading community for a structured, year-long journey of deep literary engagement.",
  keywords: [
    "LectorsBuClub",
    "book club",
    "literary society",
    "reader experience",
    "independent authors",
    "reading community",
    "literary residency",
    "salon",
  ],
  authors: [{ name: "LectorsBuClub Selection Committee" }],
  openGraph: {
    title: "LectorsBuClub | A Private Literary Society",
    description:
      "Where intellectual curiosity meets companionable consideration. Uncovering meaningful ingredients in overlooked places.",
    siteName: "LectorsBuClub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LectorsBuClub | A Private Literary Society",
    description:
      "A private literary society & managed reader experience. Connecting independent authors with an elite global reading community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans-body antialiased bg-background text-foreground min-h-screen`}
      >
        {children}
        <SonnerToaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0f2139",
              color: "#e4e4e4",
              border: "1px solid rgba(155,199,169,0.3)",
              fontFamily: "var(--font-poppins), ui-sans-serif, system-ui, sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
