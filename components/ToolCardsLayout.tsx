"use client";
import React, { useState } from "react";
import { ToolCard } from "./ToolCard";
import tools from "@/data/toolsData";

export default function ToolCardsLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = selectedCategory
    ? tools.filter((tool) => tool.category === selectedCategory)
    : tools;

  return (
    <div className=" container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
      <div className="test">
        <select
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          <option value="Développement Web">Développement Web</option>
          <option value="DevOps">DevOps</option>
        </select>
      </div>

        {filteredTools.map((tool, index) => (
          <ToolCard key={index} toolData={tool} />
        ))}
    </div>
  );
}
