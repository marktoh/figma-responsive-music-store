import type { Metadata } from "next";
import { Inter, Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Figma | Responsive Music Store",
  description:
    "A responsive music store website built with TailwindCSS, Next.js, and Storybook based on Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
