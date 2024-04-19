import { MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import MobileLinkList from "@/components/navbar/mobilelink-list";
import ToggleDarkButton from "../themes/toggle-dark-button";
import Image from "next/image";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MdMenu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex justify-center text-center">
            <div className="font-semibold text-lg flex space-x-2 items-center">
              <Image src="/logo.png" width={30} height={30} />
              <h1>BSANHS</h1>
            </div>
          </SheetTitle>
        </SheetHeader>
        <MobileLinkList />
        <div className="flex justify-center mt-8">
          <ToggleDarkButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
