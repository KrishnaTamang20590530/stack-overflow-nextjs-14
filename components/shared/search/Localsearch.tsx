import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LocalsearchProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  iconPosition: string;
  otherClasses?: string;
}

const Localsearch = ({
  imgSrc,
  placeholder,
  route,
  iconPosition,
  otherClasses,
}: LocalsearchProps) => {
  return (
    <div className="background-light800_darkgradient flex min-h-[56px] w-full items-center gap-4 rounded-lg px-4">
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        className={`paragraph-regular placeholder no-focus text-dark400_light700 border-none bg-transparent shadow-none outline-none ${otherClasses} cursor-pointer`}
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default Localsearch;
