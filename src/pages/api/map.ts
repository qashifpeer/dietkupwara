import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=DIET+Kupwara&zoom=15&size=800x400&markers=color:red%7CDIET+Kupwara&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(mapUrl);

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch map" });
    }

    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate"); // cache for performance
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
