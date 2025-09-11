// app/administration/[slug]/page.tsx
import { client } from "@/lib/client";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getSinglePost(slug: string) {
  const query = `
    *[_type=='employee' && slug.current == '${slug}']{
      'slug': slug.current,
      name,
      bio,
      email,
      contact,
      qualification,
      postHeld,
      bornOn,
      'imageUrl': profileImage.asset->url,
      'altFtImg': profileImage.alt,
    }[0]`;
  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const data = await getSinglePost(slug);

  if (!data) return notFound();

  const url = `https://www.dietkupwara.in/administration/${data.slug}`;

  return {
    title: `${data.name} - Administration`,
    description: data.bio,
    alternates: {
      canonical: url,
    },
  };
}

const ProfilePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getSinglePost(slug);

  if (!data) return notFound();

  return (
   <div className="relative w-screen h-full bg-gradient-to-tl from-teal-400 from-0% via-indigo-600 via-50% to-emerald-700 to-100%">
     <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
      {/* Profile Image */}
      {data?.imageUrl && (
        <Image
          src={data.imageUrl}
          alt={data.altFtImg || data.name}
          width={400}
          height={200}
          className="shadow-lg mb-6 object-cover"
        />
      )}

      {/* Name */}
      <h1 className="text-3xl font-extrabold text-sky-100">{data.name}</h1>

      {/* Qualification */}
      <h2 className="text-xl font-extrabold text-sky-200">({data.qualification})</h2>

      {/* Bio */}
      {data?.bio && (
        <p className="mt-4 text-lg text-sky-100 text-center leading-relaxed max-w-2xl">
          {data.bio}
        </p>
      )}

   
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
       

        {data.postHeld && (
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <h2 className="font-semibold text-gray-800 mb-1">Post Held</h2>
            <p className="text-gray-600">{data.postHeld}</p>
          </div>
        )}

        {data.bornOn && (
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <h2 className="font-semibold text-gray-800 mb-1">Born On</h2>
            <p className="text-gray-600">{data.bornOn}</p>
          </div>
        )}

        {data.email && (
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <h2 className="font-semibold text-gray-800 mb-1">Email</h2>
            <p className="text-gray-600">{data.email}</p>
          </div>
        )}

        {data.contact && (
          <div className="p-4 border rounded-xl shadow-sm bg-white">
            <h2 className="font-semibold text-gray-800 mb-1">Contact</h2>
            <p className="text-gray-600">{data.contact}</p>
          </div>
        )}
      </div>
    </section>
   </div>
  );
};

export default ProfilePage;
