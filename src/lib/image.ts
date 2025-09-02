import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { client } from "@/lib/client"

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
