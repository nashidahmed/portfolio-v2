import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nashid Shah | Portfolio",
  description:
    "Hi there! I'm a full stack website developer with over 7 years of industry experience working to bring out the best in websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
