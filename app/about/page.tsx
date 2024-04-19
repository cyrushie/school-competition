"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AboutPage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-8">
        Technical Vocational Livelihood
      </h1>
      <p className="mt-8 mx-auto text-center text-muted-foreground text-md max-w-md">
        education is all about giving people the practical skills and knowledge
        they need to succeed in specific trades or professions. This type of
        education covers a wide range of fields, including mechanics,
        electronics, carpentry, agriculture, culinary arts, and more. The goal
        of TVL programs is to prepare individuals for entering the workforce
        right away or continuing their education in their chosen field. TVL is
        often seen as a different path from traditional academic routes and can
        open up many exciting career opportunities in different industries.
      </p>
      {loaded || (
        <Skeleton className="mx-auto mt-16 w-[90%] h-[225px] max-w-[400px] max-h-[225px] rounded-md" />
      )}
      <div
        className={`mx-auto mt-16 w-[90%]  max-w-[400px] max-h-[400px] ${
          loaded ? "block" : "hidden"
        }`}
      >
        <video
          controls
          className="rounded-md"
          onLoadedData={() => setLoaded(true)}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default AboutPage;
