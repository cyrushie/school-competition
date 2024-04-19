import { links } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileLinkList = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {links.map((link, index) => (
        <SheetClose asChild key={index}>
          <Button variant="link" asChild size="lg">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        </SheetClose>
      ))}
    </div>
  );
};

export default MobileLinkList;
