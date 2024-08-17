import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FiltersearchProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}

const Filtersearch = ({
  filters,
  otherClasses,
  containerClasses,
}: FiltersearchProps) => {
  return (
    <div className={`${containerClasses} max-sm:w-full`}>
      <Select>
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 ${otherClasses} outline-none focus:outline-none`}
        >
          <SelectValue placeholder="Select to filter" />
        </SelectTrigger>
        <SelectContent className="text-dark500_light700 small-regular border-none bg-light-900 dark:bg-dark-300">
          {filters.map((filter) => (
            <SelectItem
              value={filter.value}
              key={filter.value}
              className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
            >
              {filter.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filtersearch;
