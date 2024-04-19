"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { AiOutlineBgColors } from "react-icons/ai";

const ThemesButton = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-xl">Themes</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Themes</CardTitle>
            <CardDescription>choose your themes</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 place-items-center">
            <div className="">
              <Button
                className="bg-theme-light text-theme-light-foreground hover:bg-theme-light/90 "
                size="icon"
                onClick={() => setTheme("light")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
            <div className="">
              <Button
                className="bg-theme-tako text-theme-tako-foreground hover:bg-theme-tako/90"
                size="icon"
                onClick={() => setTheme("tako")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
            <div className="">
              <Button
                className="bg-theme-midnightDusk text-theme-midnightDusk-foreground hover:bg-theme-midnightDusk/90"
                size="icon"
                onClick={() => setTheme("midnight-dusk")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
            <div className="">
              <Button
                className="bg-theme-lavender text-theme-lavender-foreground hover:bg-theme-lavender/90"
                size="icon"
                onClick={() => setTheme("lavender")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
            <div className="">
              <Button
                className="bg-theme-maroon text-theme-maroon-foreground hover:bg-theme-maroon/90"
                size="icon"
                onClick={() => setTheme("maroon")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
            <div className="">
              <Button
                className="bg-theme-teal text-theme-teal-foreground hover:bg-theme-teal/90"
                size="icon"
                onClick={() => setTheme("teal")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
            <div className="">
              <Button
                className="bg-theme-strawberry text-theme-strawberry-foreground hover:bg-theme-strawberry/90"
                size="icon"
                onClick={() => setTheme("strawberry")}
              >
                <AiOutlineBgColors className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemesButton;
