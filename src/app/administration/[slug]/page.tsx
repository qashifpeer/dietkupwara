// app/administration/[slug]/page.tsx
import { client } from "@/lib/client";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Head from "next/head";


// Get recent posts excluding current
async function getRecentPosts(currentSlug: string) {
  const query = `
    *[_type=='employee' && slug.current != '${currentSlug}'] | order(publishedAt desc)[0...5] {
      name,
      'slug': slug.current,
      'imageUrl': profileImage.asset->url
    }
  `;
  const posts = await client.fetch(query);
  return posts;
}

// Fetch single blog post data
async function getSinglePost(slug: string) {
  const query = `
    *[_type=='employee' && slug.current == '${slug}']{
      'slug': slug.current,
      name,
      email,
      contact,
      'imageUrl': profileImage.asset->url,
      'altFtImg': profileImage.alt,
      publishedAt,
      categories[]->{
        _id,
        name,
        'slug': slug.current
      }, 
    }[0]`;
  const data = await client.fetch(query);
  return data;
}

// Metadata for SEO


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await  params;
  const data = await getSinglePost(slug);

  if (!data) return notFound();

  const url = `https://www.dietkupwara.in/administration/${data.slug}`;

  return {
    title: data.name,
    description: data.bio,
    alternates: {
      canonical: url,
    },
  };
}

// Blog Post Page
const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } =  await  params;
  const data = await getSinglePost(slug);

  if (!data) return notFound();

  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col gap-10 justify-center items-center pt-20 ">
      {/* MAIN CONTENT */}
      <div className="">
        <Head>
          <title>{data.title} - Nuzha Kashmir</title>
          <meta name="description" content={data.shortDescription} />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.shortDescription} />
          <meta property="og:image" content={data.imageUrl} />
          <meta
            property="og:url"
            content={`https://www.nuzhakashmir.com/blog/${data.slug}`}
          />
          <meta name="twitter:title" content={data.title} />
          <meta name="twitter:description" content={data.shortDescription} />
          <meta name="twitter:image" content={data.imageUrl} />
        </Head>
        {/* title of the post */}
        <h1 className="text-3xl font-extrabold mb-4">{data?.name}</h1>

        <Image
          src={data?.imageUrl}
          priority
          alt={data.altFtImg}
          width={800}
          height={800}
          className="rounded-lg my-4"
        />
       
       

        {data.categories?.length > 0 && (
          <div className="mt-8">
            <h3 className="font-bold text-lg">Categories:</h3>
            <ul className="flex gap-2 flex-wrap">
              {data.categories.map(
                (category: { _id: string; name: string; slug: string }) => (
                  <li key={category._id}>
                    
                    <a
                      href={`/${category.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      {category.name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
<p>{data?.contact}</p>
<p>{data?.email}</p>
<p className="text-7xl">Page Under Construction</p>
      
    </section>
  );
};

export default BlogPost;
