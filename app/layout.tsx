import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ThemesProvider from "@/components/themes/themes-provider";
import Navbar from "@/components/navbar/navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSANHS TVL",
  description: "",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemesProvider
          attribute="class"
          themes={[
            "light",
            "default-dark",
            "strawberry",
            "strawberry-dark",
            "teal",
            "teal-dark",
            "maroon",
            "maroon-dark",
            "tako",
            "tako-dark",
            "lavender",
            "lavender-dark",
            "midnight-dusk",
            "midnight-dusk-dark",
          ]}
          defaultTheme="light"
        >
          <Navbar />
          {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
