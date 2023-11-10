import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRightFromCircle, CalendarClock, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import tool from "@/interfaces/toolsData.interface";

export function ToolCard({ toolData }: { toolData: tool}) {
  
  return (
    <Card >
      <CardHeader className="grid grid-cols-[1fr_30px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="hover:underline">{toolData.name}</CardTitle>
          <CardDescription className="hover:underline">
            <Link href={toolData.link}  target="bank">
            {toolData.link}
            </Link>
          </CardDescription>
        </div>
        <div className=" rounded">
          <TooltipProvider>
            <Tooltip>
              <Link href={toolData.link} target="bank">
                <TooltipTrigger>
                  <ArrowUpRightFromCircle />
                </TooltipTrigger>
              </Link>
              <TooltipContent>
                <p>Visit Website</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <p className="line-clamp-3  lg:leading-relaxed">
            {" "}
            {toolData.description}
          </p>
        </div>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="mr-3 h-4 w-4 fill-sky-400 text-sky-400" />
            By {toolData.contributor}
          </div>
          <div className="flex items-center"></div>
          <div className="flex justify-center items-center">
            <CalendarClock className="h-4 w-4 mr-3" />
            April 2023
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
