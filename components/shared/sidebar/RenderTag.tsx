import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

export interface TagsType {
  name: string;
  count: number;
}

const RenderTag = ({ name, count }: TagsType) => {
  return (
    <Link
      href="/"
      className="flex cursor-pointer items-center justify-between gap-2"
    >
      <Badge className="background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border-none px-4 py-2 text-xs font-semibold uppercase">
        {name}
      </Badge>
      <p className="small-medium text-dark500_light700">{count}</p>
    </Link>
  );
};

export default RenderTag;
