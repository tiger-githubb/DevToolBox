import React from "react";
import tools from "@/data/toolsData";
import Link from "next/link";

function ToolsPage() {

  return (
    <div>
      ToolsPage
      {tools.map((tool, index) => (
        <div key={index}>
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
          <Link href={tool.link}>Lien</Link>
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
