"use client";
import React, { useState } from "react";
import { ToolCard } from "./ToolCard";
import tools from "@/data/toolsData";
import CategoryTabs from "./CategoryTabs";

export default function ToolCardsLayout() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = selectedCategory
    ? tools.filter((tool) => tool.category === selectedCategory)
    : tools;

    const handleCategoryChange = (category: string | null) => {
      setSelectedCategory(category);
    };

  return (
    <>
    <CategoryTabs selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    <div className=" container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {filteredTools.map((tool, index) => (
          <ToolCard key={index} toolData={tool} />
          ))}
    </div>
          </>
  );
}
