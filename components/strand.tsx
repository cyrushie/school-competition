import Image from "next/image";

interface StrandProps {
  title: string;
  paragraph: string;
  image: string;
}

const Strand = ({ title, paragraph, image }: StrandProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-4 min-h-[calc(100vh-6rem)]">
      <div className="flex-1">
        <h2 className="text-2xl mt-8 font-semibold max-w-md ">{title}</h2>

        <p className="mt-4 text-muted-foreground text-sm max-w-md ">
          {paragraph}
        </p>
      </div>
      <div className="flex-1 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="strand image"
          width={400}
          height={400}
          className="w-full h-full rounded-lg md:p-0 p-8 "
        />
      </div>
    </div>
  );
};

export default Strand;
