import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const members = [
  {
    src: "https://st3.depositphotos.com/3538469/15313/i/380/depositphotos_153133094-stock-photo-business-man-symbol.jpg",
    name: "Aristide Karbou",
    profession: "Lead Developer",
    linkedIn: "/",
    github: "/",
  },
  {
    src: "https://st3.depositphotos.com/3538469/15313/i/380/depositphotos_153133094-stock-photo-business-man-symbol.jpg",
    name: "Désié Gnanyome",
    profession: "Web Developer",
    linkedIn: "/",
    github: "/",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            About DevToolbox
          </h1>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            DevToolbox is a comprehensive suite of developer tools designed to
            streamline your workflow and enhance productivity. Our features
            include an advanced code editor, real-time collaboration, version
            control integration, and much more.
          </p>
        </div>
        <div className="flex justify-center gap-8 mt-4 border-b-2 border-zinc-200 dark:border-zinc-700">
          <Link
            className="pb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-zinc-300 border-b-2 border-zinc-900 dark:border-zinc-50"
            href="/about"
          >
            Team
          </Link>
          <Link
            className="pb-2 text-lg font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-700 dark:hover:text-zinc-300 border-b-2 border-transparent"
            href="/about/contributor"
          >
            Contributors
          </Link>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 mt-10 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 justify-items-center ">
          {members.map((member, i) => (
            <div className="grid gap-1 items-center text-center" key={i}>
              <img
                alt="Member pic"
                className="aspect-content overflow-hidden rounded-full object-cover object-center"
                key={i}
                height="140"
                src={member.src}
                width="140"
              />
              <h3 className="text-lg font-bold" key={i}>
                {member.name}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400" key={i}>
                {member.profession}
              </p>
              <div className="flex gap-2 justify-center" key={i}>
                <a
                  aria-label={"${member.name} LinkedIn"}
                  href={member.linkedIn}
                  key={i}
                >
                  <svg
                    className=" w-6 h-6 text-blue-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect height="12" width="4" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  aria-label={"${member.name} Github"}
                  href={member.github}
                  key={i}
                >
                  <Github />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <Button variant={"default"}>
            <span className="pr-3">Contribute on Github</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
