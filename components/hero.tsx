import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ThemesButton from "./themes/themes-button";

const Hero = () => {
  return (
    <div className="max-container gap-4 flex flex-col md:flex-row min-h-[calc(100vh-6rem)]">
      <div className=" justify-center flex-1 flex flex-col items-center md:items-start">
        <Badge
          variant="outline"
          className="text-center md:text-left font-semibold"
        >
          BSANHS
        </Badge>
        <h1 className="text-foreground text-center md:text-left text-5xl lg:text-6xl font-bold leading-loose tracking-wide">
          TVL Strands
        </h1>
        <p className="text-muted-foreground text-sm text-center md:text-left mt-4">
          Dive into the diverse world of TVL strands and unlock endless
          opportunities for your future!
        </p>
        <div className="flex justify-center mt-4 md:justify-start">
          <ThemesButton />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-full shadom-md w-full p-8 md:p-0">
          <Image
            src="/background.jpg"
            alt="hero image"
            width={600}
            height={600}
            className="h-full w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
