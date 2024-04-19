import React from "react";
import { MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NavlinkList from "./navlink-list";
import ToggleDarkButton from "@/components/themes/toggle-dark-button";
import MobileNav from "@/components/navbar/mobile-nav";

const Navbar = () => {
  return (
    <nav className="max-container h-[6rem] flex justify-between items-center">
      <div className="font-semibold text-lg flex space-x-2 items-center">
        <Image alt="bsanhs logo" src="/logo.png" width={30} height={30} />
        <h1>BSANHS</h1>
      </div>

      <NavlinkList />

      <div className="hidden md:block">
        <ToggleDarkButton />
      </div>

      <div className="md:hidden block">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
