// import "server-only";

import { Client } from "@notionhq/client";
import React from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { notFound } from "next/navigation";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = React.cache(() => {
  try {
    return notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
    });
  } catch (error) {
    console.error(error);
    return notFound();
  }
});

export const fetchPageBySlug = React.cache((slug: string) => {
  try {
    return notion.databases
      .query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      })
      .then((res) => res.results[0] as PageObjectResponse | undefined);
  } catch (error) {
    console.error(error);
    return notFound();
  }
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  try {
    return notion.blocks.children
      .list({ block_id: pageId })
      .then((res) => res.results as BlockObjectResponse[]);
  } catch (error) {
    console.error(error);
    return notFound();
  }
});
