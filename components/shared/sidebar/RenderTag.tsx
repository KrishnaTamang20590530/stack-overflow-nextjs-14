import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

export interface TagsType {
  _id: string;
  name: string;
  totalQuestions?: number;
}

const RenderTag = ({ name, totalQuestions, _id }: TagsType) => {
  return (
    <Link
      href={`/tag/${_id}`}
      className="flex cursor-pointer items-center justify-between gap-2"
    >
      <Badge className="background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border-none px-4 py-2 text-xs font-semibold uppercase">
        {name}
      </Badge>
      <p className="small-medium text-dark500_light700">{totalQuestions}</p>
    </Link>
  );
};

export default RenderTag;
