import { fetchPageBlocks, fetchPageBySlug, notion } from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { notFound } from "next/navigation";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import "@/app/blog/[slug]/BlogComponent.scss";
import "@notion-render/client/sass/theme.scss";
import "@notion-render/client/sass/mixins/_colors.scss";
import "@notion-render/client/sass/variables/_colors.scss";
import ErrorPage from "@/app/error";

type Data = {
  html: string;
};

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const post: any = await fetchPageBySlug(params.slug);

  const blocks = await fetchPageBlocks(post.id);
  let error: Error | null = null;
  try {
   
  } catch (error) {
    console.error(error);
  }

  if (error) {
    return <ErrorPage error={error} reset={() => window.location.reload()} />;
  }

  const renderer = new NotionRenderer({
    client: notion,
  });
  let coverurl: string = "";
  if (post.cover?.type === "external") {
    coverurl = post.cover?.external.url;
  } else {
    coverurl = post.cover?.file?.url;
  }
  console.log('value:',coverurl);
  
  renderer.use(hljsPlugin(post));
  renderer.use(bookmarkPlugin(undefined));
  const html = await renderer.render(...blocks);

  return (
    <>
      <div style={{ maxWidth: "800px", margin: "auto" }} className=" pt-8 px-4">
        <div className="w-full h-full flex flex-col items-center justify-center my-4">
          <img
            src={coverurl || ""}
            alt=""
            className="object-cover h-72 w-full object-center rounded-lg"
          />
        </div>
        <h1>{post.properties.Title.rich_text[0].text.content}</h1>
      </div>
      <div
        className="notion-render px-4"
        style={{ maxWidth: "800px", margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <div className="mb-40"></div>
    </>
  );
}
