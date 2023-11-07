import React from "react";
import toolsDatabase from "@/data/toolsData";
import Link from "next/link";

function ToolsPage() {

  return (
    <div>
      ToolsPage
      {toolsDatabase.map((tool, index) => (
        <div key={index}>
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
          <Link href={tool.link}>Lien vers l'outil</Link>
          <p>Catégorie : {tool.category}</p>
          <p>Tags : {tool.tags}</p>
          <p>
            Ajouté par : {tool.contributor} le {tool.add_date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ToolsPage;
