"use client";
import React, { useState, useEffect } from "react";

function ToolsPage() {
  const [metadataImage, setMetadataImage] = useState<string | undefined>(
    undefined
  );

  const urlMetadata = require("url-metadata");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          mode: "no-cors",
          includeResponseBody: false,
        };

        const metadata = await urlMetadata(
          "https://youtube.com/",
          options
        );

        const ogImage = metadata["og:image"] || undefined;
        setMetadataImage(ogImage);

        console.log("fetched metadata:", metadata);
        console.log("inside fetchMetadata, ogImage:", ogImage);
      } catch (err) {
        console.log("fetch error:", err);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  console.log("outside fetchMetadata, metadataImage:", metadataImage);

  return (
    <>
      <img
        src={`${metadataImage}`}
        className="object-cover h-52 w-96 object-center pb-3 rounded-t-lg"
        alt=""
      />
    </>
  );
}

export default ToolsPage;
