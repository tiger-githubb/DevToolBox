import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Github } from "lucide-react";


const contributors = [
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
    profession: "web developper",
    linkedIn: "/",
    github: "/",
  },
  {
    src: "https://st3.depositphotos.com/3538469/15313/i/380/depositphotos_153133094-stock-photo-business-man-symbol.jpg",
    name: "Kabirou Agouda",
    profession: "Full stack developper",
    linkedIn: "/",
    github: "/",
  },
  {
    src: "https://st3.depositphotos.com/3538469/15313/i/380/depositphotos_153133094-stock-photo-business-man-symbol.jpg",
    name: "Emmanuell Owouko",
    profession: "CEO",
    linkedIn: "/",
    github: "/",
  },
  {
    src: "https://st3.depositphotos.com/3538469/15313/i/380/depositphotos_153133094-stock-photo-business-man-symbol.jpg",
    name: "kodjo rhodes",
    profession: "web designer",
    linkedIn: "/",
    github: "/",
  },
  {
    src: "https://st3.depositphotos.com/3538469/15313/i/380/depositphotos_153133094-stock-photo-business-man-symbol.jpg",
    name: "Lana agouda",
    profession: "mobil developper",
    linkedIn: "/",
    github: "/",
  },
];

export default function ContributorPage() {
  return (
    <>
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Contributors
        </h2>

        <p className="mx-auto max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 dark:text-zinc-400">
          We are grateful for the wonderful team of developers who contribute to
          our project.
        </p>
      </div>
      <div className="w-full py-6 md:py-12 lg:py-16 flex justify-center items-center">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10 items-center">
          {contributors.map((contributor, i) => (
            <div className="space-y-4 flex flex-col justify-center items-center" key={i}>
              <Avatar className="h-24 w-24" key={i}>
                <AvatarImage alt={contributor.name} key={i} src={contributor.src} />
                <AvatarFallback>{i+1}</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 text-xs text-center" key={i}>
                <div className="font-medium" key={i}>{contributor.name}</div>
                <div className="text-zinc-500 dark:text-zinc-400"key={i}>
                  {contributor.profession}
                </div>
                <div className="flex gap-2 justify-center" key={i}>
                <a
                  aria-label={"${contributor.name} LinkedIn"}
                  href={contributor.linkedIn}
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
                  aria-label={"${contributor.name} Github"}
                  href={contributor.github}
                  key={i}
                >
                  <Github />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
