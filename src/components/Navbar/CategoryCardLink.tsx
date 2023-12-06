"use client";

import { useProductsContext } from "@/app/contexts";
import { TCategory } from "@/interfaces";
import Link from "next/link";

export const CategoryCardLink = ({ category }: { category: TCategory }) => {
  const { setIsOpenNavbarProductList } = useProductsContext();
  return (
    <Link
      key={category.id}
      href={`/${category.title}`}
      onMouseOverCapture={() => {
        setIsOpenNavbarProductList(true);
      }}
    >
      {category.title.toUpperCase()}
    </Link>
  );
};
