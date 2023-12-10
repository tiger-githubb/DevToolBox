import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import React from "react";

export default async function blog() {
  
  const notionPages  = await fetchPages();
  console.log(notionPages.results);
  const articles:any = notionPages.results;


  return (
    <>
      <div>Nos Articles de blog</div>
      <ul>
        {articles.map((article:any) => (
          <li key={article.id}>
            <Link href={`blog/${article.properties.Slug.title[0].text.content}`} className="text-sm font-medium transition-colors">
              {article.properties.Title.rich_text[0].text.content}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
