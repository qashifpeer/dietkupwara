import React from "react";
import { getPrincipalMessage } from "@/lib/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Head from "next/head";

// code of formatting headings
const portableTextComponents = {
  types: {},
  marks: {},
  block: {
    h1: ({ children }: any) => <h2>{children}</h2>, // downgrade h1 to h2
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    h4: ({ children }: any) => <h4>{children}</h4>,
    normal: ({ children }: any) => <p>{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 pl-4 italic">{children}</blockquote>
    ),
  },
};

// Metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPrincipalMessage();

  if (!data) return notFound();

  return {
    title: `Principal&apos;'s Message | DIET Kupwara`,
    description:
      "Principal District Institute of Education and Trainings (DIET) Kupwara welcomes you to the premier educational Institute of district kupwara.",
    alternates: {
      canonical: "https://www.dietkupwara.in/principal",
    },
    // metadataBase: new URL("https://www.dietkupwara.in"),
    openGraph: {
      title: `Principal&apos;'s Message | DIET Kupwara`,
      description:
        "Principal District Institute of Education and Trainings (DIET) Kupwara welcomes you to the premier educational Institute of district kupwara.",
      url: `https://www.dietkupwara.in/principal`,
      images: [{ url: data.imageUrl, width: 800, height: 600 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Principal&apos;'s Message | DIET Kupwara`,
      // description: data.shortDescription,
      // images: [data.imageUrl],
    },
  };
}

export default async function PrincipalPage() {
  const data = await getPrincipalMessage();

  return (
    <section className="w-full h-full bg-gradient-to-b from-stone-900 from- via-gray-900 via-100% to-stone-900 to-100%">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 justify-center items-center pt-20 ">
        {/* MAIN CONTENT */}
        <div className="">
          <Head>
            <title>From Principal&apos;s Desk | DIET Kupwara</title>
            <meta
              name="description"
              content={
                "Principal District Institute of Education and Trainings (DIET) Kupwara welcomes you to the premier educational Institute of district kupwara."
              }
            />
            <meta
              property="og:title"
              content={"From Principal&apos;s Desk | DIET Kupwara"}
            />
            <meta
              property="og:description"
              content={
                "Principal District Institute of Education and Trainings (DIET) Kupwara welcomes you to the premier educational Institute of district kupwara."
              }
            />
            <meta property="og:image" content={data.imageUrl} />
            <meta
              property="og:url"
              content={`https://www.dietkupwara.com/principal`}
            />
            <meta
              name="description"
              content={
                "Principal District Institute of Education and Trainings (DIET) Kupwara welcomes you to the premier educational Institute of district kupwara."
              }
            />
            <meta
              property="og:title"
              content={"From Principal&apos;s Desk | DIET Kupwara"}
            />
            <meta
              property="og:description"
              content={
                "Principal District Institute of Education and Trainings (DIET) Kupwara welcomes you to the premier educational Institute of district kupwara."
              }
            />
            <meta property="og:image" content={data.imageUrl} />
          </Head>
          {/* title of the post */}
          <h1 className="text-3xl text-sky-300 font-extrabold mb-4">
            From the Principal DIET Kupwara&apos;s Desk{" "}
          </h1>

          <Image
            src={data?.imageUrl}
            priority
            alt={data.alt}
            width={300}
            height={300}
            className="rounded-lg my-4"
          />

          {/* content bloc */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* content side*/}

            <div className="mt-8 prose prose-lg  prose-strong:text-sky-600 text-sky-200  prose-headings:text-sky-100 prose-invert prose-li:marker:text-rose-500">
              <PortableText
                value={data.content}
                components={portableTextComponents}
              />
              <p className="text-2xl text-bold text-rose-500">
                {data?.principalName}
              </p>
            </div>
          </div>
        </div>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "DIET Kupwara",
              image: [data.imageUrl],
              author: {
                "@type": "Person",
                name: "Koshur Coder",
              },
              publisher: {
                "@type": "Organization",
                name: "DIET Kupwara",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.dietkupwara.in/images/logo/logo.png",
                },
              },
              datePublished: data.publishedAt,
              // dateModified: data.updatedAt  || data.publishedAt,
              // description: data.excerpt || data.shortDescription || "",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.dietkupwara.in/principal`,
              },
            }),
          }}
        />
      </div>
    </section>
  );
}
