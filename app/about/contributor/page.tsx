import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
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
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Developer 1" src="/placeholder-avatar.jpg" />
              <AvatarFallback>D1</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs text-center">
              <div className="font-medium">Developer 1</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                dev1@example.com
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Developer 2" src="/placeholder-avatar.jpg" />
              <AvatarFallback>D2</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs text-center">
              <div className="font-medium">Developer 2</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                dev2@example.com
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Developer 3" src="/placeholder-avatar.jpg" />
              <AvatarFallback>D3</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs text-center">
              <div className="font-medium">Developer 3</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                dev3@example.com
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Developer 4" src="/placeholder-avatar.jpg" />
              <AvatarFallback>D4</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs text-center">
              <div className="font-medium">Developer 4</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                dev4@example.com
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Developer 5" src="/placeholder-avatar.jpg" />
              <AvatarFallback>D5</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs text-center">
              <div className="font-medium">Developer 5</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                dev5@example.com
              </div>
            </div>
          </div>
          <div className="space-y-4 flex flex-col justify-center items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage alt="Developer 6" src="/placeholder-avatar.jpg" />
              <AvatarFallback>D6</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs text-center">
              <div className="font-medium">Developer 6</div>
              <div className="text-zinc-500 dark:text-zinc-400">
                dev6@example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
