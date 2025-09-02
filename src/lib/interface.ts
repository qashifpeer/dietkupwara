import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
    url?: string;
  };
  alt?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug: string; // if actually { current: string } in Sanity, change this
  image: SanityImage;
}

export interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
}

// Interface For Level
export interface LevelType {
  _id: string;
  level: number;   // numeric field from your schema
  title: string;   // optional, e.g. "Level 1"
}

export interface Employee {
  _id: string;
  name: string;
  shortDescription: string;
  slug: { current: string };
  imageUrl: string;
  // altFtImg: string;
  // publishedAt: string;
  contact: string;
  email : string;
  postHeld: string;
  qualification :string;
  bio: string;
  level: LevelType;
  categories?: Category[];
  // content: PortableTextBlock[];
}

export type EmployeeType = Employee;
export type FetchedData = Employee;
