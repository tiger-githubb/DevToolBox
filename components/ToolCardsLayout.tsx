import React from "react";
import { ToolCard } from "./ToolCard";
import tools from "@/data/toolsData";

export default function ToolCardsLayout() {
  return (
    <div className=" container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
      {tools.map((tool,index) => (
          <ToolCard key={index} toolData={tool}  />
      ))}
    </div>
  );
}
