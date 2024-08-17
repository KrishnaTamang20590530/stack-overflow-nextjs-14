import { questions, tags } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";

const Rightsidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 h-screen w-[350px] overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((question) => {
            return (
              <Link
                href="/"
                key={question.id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.content}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  alt="chevron"
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {tags.map((tag) => (
            <RenderTag key={tag.name} name={tag.name} count={tag.count} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rightsidebar;
