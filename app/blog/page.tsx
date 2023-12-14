import { fetchPages } from "@/lib/notion";
import Link from "next/link";
import React from "react";

export default async function blog() {
  const notionPages = await fetchPages();
  const articles: any = notionPages.results;



  return (
    <>
      <div className= "py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos Articles de blog
            </h2>
            <p className="mt-2 text-lg leading-8 ">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles.map((article:any) => (
              <article
                key={article.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
            <a href="#">
              <img  className="object-cover h-52 w-96 object-center pb-3 rounded-t-lg"  src={article.cover?.external?.url || article.cover?.file?.url}  alt=""  />
            </a>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={new Date(article.created_time).toLocaleDateString()}className="text-gray-500">
                  {new Date(article.created_time).toLocaleDateString()}
                  </time>
                  <Link
                    href={"#"}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {"Category"}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:text-primary">
                    <Link href={`blog/${article.properties.Slug.title[0].text.content}`}>
                      <span className="absolute inset-0" />
                      {article.properties.Title.rich_text[0].text.content}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article.properties.Description.rich_text[0].text.content}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={'https://images.unsplash.com/photo-1604145559206-e3bce0040e2d'}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={'aristidekarbou.pro'}>
                        <span className="absolute inset-0" />
                        {"Aristide KARBOU"}
                      </a>
                    </p>
                    <p className="text-gray-600">{'Web Developper'}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
