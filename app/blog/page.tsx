import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import React from "react";

export default async function blog() {
  const articles = await fetchPages();
  console.log(articles);

  return (
    <>
      <div>Nos Articles de blog</div>
      <ul>
        {articles.results.map((article) => (
          <li key={article.id}>
            <Link
              key={article.id}
              href={"blog/" + article.properties.Slug.title[0].text.content}
              className="text-sm font-medium transition-colors"
            >
              {article.properties.Title.rich_text[0].text.content}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
