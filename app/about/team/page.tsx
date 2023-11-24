import { Github, Linkedin } from 'lucide-react';

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

export default function TeamPage() {
    return (
        <div className="mx-auto grid max-w-sm items-start gap-8 mt-10 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 justify-items-center ">
        {members.map((member, i) =>(
          <div className="grid gap-1 items-center text-center" key={i} >
            <img
              alt="Member pic"
              className="aspect-content overflow-hidden rounded-full object-cover object-center"
              key={i}
              height="140"
              src={member.src}
              width="140"
            />
            <h3 className="text-lg font-bold" key={i}>{member.name}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400" key={i}>{member.profession}</p>
            <div className="flex gap-2 justify-center" key={i}>
              <a aria-label={"${member.name} LinkedIn"} href={member.linkedIn} key={i}>
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
              <a aria-label={"${member.name} Github"} href={member.github} key={i}>
                <Github />
              </a>
              
            </div>
          </div>
        ))}
      </div>
    )
  }