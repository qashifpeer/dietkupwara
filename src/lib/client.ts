import { createClient } from 'next-sanity';



export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // useCdn: process.env.NODE_ENV === 'production' ? true : false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  // apiVersion: '2024-04-12',
  // token : process.env.SANITY_SECRET_TOKEN
});



//get all posts
export async function getData() {
  const query =
    `
    *[_type == 'employee'] | order(level asc)
    {
      _id,
      name,
      email,
      'imageUrl':profileImage.asset->url,
     contact,
      postHeld,
      qualification,
      level,
      bio,
      "slug":slug.current,   
      categories[]->{
        _id,
        name,
        slug
      },
        'content' : body
        
    }
    `
  const data = await client.fetch(query);
  return data;
}

// get posts with destinations
// getData.ts


export const getPlacesData = async () => {
  const query =
    `
    *[_type == 'post' && 
    "Places" in categories[]->name
    ] | order(publishedAt desc)
     {
      _id,
      title,
      shortDescription,
      "slug":slug.current,
       'imageUrl':featureImage.asset->url,
      'altFtImg': featureImage.alt,
         publishedAt,
        'body': pt::text(body),
        'author' : *[_type == 'author' && _id== ^.author._ref][0]{
        _id,
          name,
          'slug' : slug.current,
        },
      categories[]->{
        _id,
        name,slug
      },
      places[]->{
      _id,
      name,
      slug
      },
       'content' : body
    }`;

  const posts = await client.fetch(query);
  return posts;
};


// getting Single employee by slug

export async function getEmployeeBySlug(slug: string) {
  const query = `*[_type == "employee" && slug.current == $slug][0]{
    _id,
    name,
    email,
    contact,
    bio,
    slug,
    image{
      asset->{
        url
      }
    }
  }`;

  return client.fetch(query, { slug }); // 👈 params provided here
}

// Principal Message
export async function getPrincipalMessage() {
  const query =
    `*[_type == "principalMessage"][0]
  {
   _id,
   principalName,
   'imageUrl': profileImage.asset->url,
    'alt': profileImage.alt,

    'content' : body,
  }`;
  const principalMessage = await client.fetch(query);
  return principalMessage;
}


// Getting About Us Data
export async function getAboutUsData() {
  const query =
    `*[_type == "aboutUs"][0]
  {
   _id,
   title,
   'imageUrl': dietImage.asset->url,
    'alt': dietImage.alt,
     publishedAt,
    'content' : body,
  }`;
  const aboutUsData = await client.fetch(query);
  return aboutUsData;
}



// Fetch orders with limit & offset
export async function getOrders(limit: number, offset: number = 0) {
  const query = `*[_type == "order"] | order(date desc) [$offset...$end] {
    _id,
    title,
    date,
    "fileUrl": file.asset->url
  }`;

  return client.fetch(query, {
    offset,
    end: offset + limit,
  });
}