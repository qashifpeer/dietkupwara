import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
import { Footer, Nav } from "@/components";
import ServerDown from "@/components/ServerDown";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dietkupwara.in"),
  title: "DIET Kupwara | District Institute of Education & Training, J&K",
  description:
    "District Institute of Education & Training Kupwara (DIET) provides quality education, training, and professional development for teachers in J&K.",
  keywords:
    "DIET Kupwara, kupwara, diet kupwara, District Institute of Education and Training Kupwara,Teacher Education Kupwara, kupwara, Teacher Workshops Kupwara, Teacher Capacity Building Kupwara,District Institute Kupwara,Teacher education programs in Jammu & Kashmir, Government teacher training institute Kupwara ",
  openGraph: {
    title: "DIET Kupwara",
    description: "District Institute of Education & Training, J&K.",
    url: "https://www.dietkupwara.in",
    siteName: "DIET Kupwara",
    images: [
      {
        url: "https://www.dietkupwara.in/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ServerDown />
        {/* <Nav /> */}
        <main className="">{children}</main>
        {/* <Footer /> */}

       {/* ✅ JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "DIET Kupwara",
              alternateName:
                "District Institute of Education & Training Kupwara",
              url: "https://dietkupwara.in",
              logo: "https://dietkupwara.in/logo/logo.png", // replace with actual logo URL
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bohipora Kupwara, Near Boys Degree College",
                addressRegion: "Jammu & Kashmir",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/...", // add if available
                "https://twitter.com/...", // add if available
                "https://linkedin.com/...", // add if available
              ],
              description:
                "District Institute of Education & Training Kupwara (DIET) provides quality teacher education, training, and professional development in J&K.",
            },
            null,
            2
          )}
        </script>
      </body>
    </html>
  );
}
