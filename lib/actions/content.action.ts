"use server";

import { client } from "@/lib/contentful";
import { ClientPageRoot } from "next/dist/client/components/client-page";
// import { Entry } from "contentful";

export const getPosts = async () => {
  const response = await client.getEntries({
    content_type: "post",
    /* @ts-ignore */
    order: "-sys.createdAt",
    include: 1, // Ensure linked entries are included
  });

  return response.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.path,
    author: {
      name: item.fields.author?.fields.name,
      picture: item.fields.author?.fields.picture.fields.file.url,
    },
    summary: item.fields.summary,
    coverImage: item.fields.coverImage?.fields.file.url,
    content: item.fields.content,
    viewed: item.fields.viewed,
    likes: item.fields.likes,
    publishedDate: item.sys.createdAt,
  }));
};

export const updatePost = async (postId: string, field: "likes" | "viewed") => {
  const entry = await client.getEntry(postId);

  // Initialize the field if it doesn't exist
  if (!entry.fields[field]) {
    entry.fields[field] = { "en-US": 0 };
  }

  // Initialize the locale if it doesn't exist
  /* @ts-ignore */

  if (!entry.fields[field]["en-US"]) {
    /* @ts-ignore */

    entry.fields[field] = 0;
  }
  /* @ts-ignore */

  entry.fields[field] += 1;
  /* @ts-ignore */

  // await client.updateEntry(entry);
};
