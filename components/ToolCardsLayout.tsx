import React from "react";
import { ToolCard } from "./ToolCard";

export default function ToolCardsLayout() {
  return (
    <>
      <div className=" container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
        <ToolCard />
      </div>
    </>
  );
}
