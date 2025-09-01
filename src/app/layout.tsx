import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Footer, Nav } from "@/components";



export const metadata: Metadata = {
  title: "DIET Kupwara",
  description: "District Institute of Education And Training Kupwara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
        <Nav />
        <main className=''>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
