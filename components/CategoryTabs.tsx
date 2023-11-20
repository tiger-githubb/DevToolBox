"use client";
import React from "react";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const routes = [
  {
    category: "Content Management",
  },
  {
    category: "Data Analysis",
  },
  {
    category: "E-commerce",
  },
  {
    category: "Version Control",
  },
  {
    category: "Database",
  },
  {
    category: "Web Development",
  },
  {
    category: "Frontend Frameworks",
  },
  {
    category: "Backend Frameworks",
  },
  {
    category: "Cloud Services",
  },
  {
    category: "Mobile App Development",
  },
  {
    category: "DevOps",
  },
  {
    category: "Machine Learning",
  },
  {
    category: "API Integration",
  },
  {
    category: "Content Management",
  },
  {
    category: "Design and UI/UX",
  },
  {
    category: "Productivity",
  },
  {
    category: "Big Data",
  },
];

export interface CategoryTabsProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <>
      <div className="md:container my-6">
        <ScrollArea className=" whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4 items-center lg:space-x-6">
          <Button
              asChild
              key="all-categories"
              variant={`${selectedCategory === null ? 'default' : 'ghost'}`}
              onClick={() => onCategoryChange(null)}
            >
              <span className={`text-sm font-semibold transition-colors ${selectedCategory === null ? 'text-primary' : ''}`}>
                Toutes les catégories
              </span>
            </Button>
            {routes.map((route, i) => (
              <Button asChild key={i} variant={`${selectedCategory === route.category ? 'default' : 'ghost'}`} onClick={() => onCategoryChange(route.category)}>
              <span className={`text-sm font-semibold transition-colors ${selectedCategory === route.category ? 'text-primary' : ''}`}>
                {route.category}
              </span>
            </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}

export default CategoryTabs;