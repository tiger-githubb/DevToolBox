import React from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightSquare, Menu } from "lucide-react";
import  SearchBar  from "./SearchBar"
import ModeToggle from "./ui/ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  {
    href: "/tools",
    label: "Tools",
  },
  {
    href: "/",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/",
    label: "Contact",
  },
];

export const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[300px] sm:w[400px]">
                <nav className=" flex flex-col gap-4 mt-5">
                  {routes.map((route, i) => (
                    <Button asChild key={i} variant={"ghost"}>
                      <Link
                        key={i}
                        href={route.href}
                        className="text-sm font-medium transition-colors"
                      >
                        {route.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">DevToolKit</h1>
            </Link>
          </div>

          <nav className="mx-6  items-center space-x-4 lg:space-x-6 hidden md:block">
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
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
            <SearchBar />
            </div>
            <Button variant={"default"}>
              <span className="pr-3">Add new tool</span>
              <ArrowRightSquare className="h-6 w-6" />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};
