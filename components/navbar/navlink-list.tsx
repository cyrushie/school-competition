"use client";

import { links } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavlinkList = () => {
  const path = usePathname();

  return (
    <div className="hidden md:block">
      {links.map((link, index) => (
        <Button variant={path === link.href ? "default" : "link"} asChild>
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </div>
  );
};

export default NavlinkList;
