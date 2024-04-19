"use client";

import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ToggleDarkButton = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (
      theme === "default-dark" ||
      theme === "lavender-dark" ||
      theme === "maroon-dark" ||
      theme === "strawberry-dark" ||
      theme === "midnight-dusk-dark" ||
      theme === "tako-dark" ||
      theme === "teal-dark"
    ) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleLight = () => {
    switch (theme) {
      case "default-dark":
        setTheme("light");
        break;
      case "lavender-dark":
        setTheme("lavender");
        break;
      case "maroon-dark":
        setTheme("maroon");
        break;
      case "strawberry-dark":
        setTheme("strawberry");
        break;
      case "midnight-dusk-dark":
        setTheme("midnight-dusk");
        break;
      case "tako-dark":
        setTheme("tako");
        break;
      case "teal-dark":
        setTheme("teal");
        break;
    }
  };

  const handleDark = () => {
    switch (theme) {
      case "light":
        setTheme("default-dark");
        break;
      case "lavender":
        setTheme("lavender-dark");
        break;
      case "maroon":
        setTheme("maroon-dark");
        break;
      case "strawberry":
        setTheme("strawberry-dark");
        break;
      case "midnight-dusk":
        setTheme("midnight-dusk-dark");
        break;
      case "tako":
        setTheme("tako-dark");
        break;
      case "teal":
        setTheme("teal-dark");
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <SunIcon className="h-5 w-5 scale-100 dark:scale-0 rotate-0 dark:rotate-180 dark:hidden" />
          <MoonIcon className="h-5 w-5 scale-0 rotate-180 dark:scale-100 dark:rotate-0 hidden dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLight}>light</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDark}>dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleDarkButton;
