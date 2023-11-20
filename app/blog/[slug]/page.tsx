import { fetchPageBlocks, fetchPageBySlug } from "@/lib/notion";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();

  const content = await fetchPageBlocks(post.id);

  return <></>;
}