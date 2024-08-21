"use client";
import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";

const HomeFilter = () => {
  const active = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? "bg-primary-100 text-primary-500 dark:bg-dark-400 dark:text-primary-500"
              : "bg-light-800 text-light-500 dark:bg-dark-300 dark:text-light-500"
          }`}
          onClick={() => console.log("clicked")}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
