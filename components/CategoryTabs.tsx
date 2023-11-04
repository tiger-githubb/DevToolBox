import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const routes = [
  {
    href: "/",
    label: "CMS",
  },
  {
    href: "/",
    label: "Data Analysis",
  },
  {
    href: "/",
    label: "E-commerce",
  },
  {
    href: "/",
    label: "Version Control",
  },
  {
    href: "/",
    label: "Database",
  },
  {
    href: "/",
    label: "Web Development",
  },
  {
    href: "/",
    label: "Frontend Frameworks",
  },
  {
    href: "/",
    label: "Backend Frameworks",
  },
  {
    href: "/",
    label: "Cloud Services",
  },
  {
    href: "/",
    label: "Mobile App Development",
  },
  {
    href: "/",
    label: "DevOps",
  },
  {
    href: "/",
    label: "Security",
  },
  {
    href: "/",
    label: "Machine Learning",
  },
  {
    href: "/",
    label: "API Integration",
  },
  {
    href: "/",
    label: "Testing and QA",
  },
  {
    href: "/",
    label: "Content Management",
  },
  {
    href: "/",
    label: "Design and UI/UX",
  },
  {
    href: "/",
    label: "Productivity",
  },
  {
    href: "/",
    label: "Monitoring and Analytics",
  },
  {
    href: "/",
    label: "IoT",
  },
  {
    href: "/",
    label: "Big Data",
  },
  {
    href: "/",
    label: "Blockchain",
  },
  {
    href: "/",
    label: "Automation",
  },
  {
    href: "/",
    label: "AI and Chatbots",
  },
  {
    href: "/",
    label: "Virtual Reality (VR)",
  },
  {
    href: "/",
    label: "Augmented Reality (AR)",
  },
  {
    href: "/",
    label: "Audio and Video Processing",
  },
  {
    href: "/",
    label: "Data Visualization",
  },
  {
    href: "/",
    label: "Geospatial and Mapping",
  },
  {
    href: "/",
    label: "Serverless Computing",
  },
];

export default function CategoryTabs() {
  return (
    <>
      <div className="md:container my-6">
        <ScrollArea className=" whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4 items-center lg:space-x-6">
            <Button asChild variant={"default"}>
              <Link
                href="/"
                className="text-sm font-semibold transition-colors"
              >
                active
              </Link>
            </Button>
            {routes.map((route, i) => (
              <Button asChild key={i} variant={"ghost"}>
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-semibold transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
