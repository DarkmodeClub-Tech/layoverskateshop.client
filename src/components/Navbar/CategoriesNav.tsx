"use client";

import { TCategory } from "@/interfaces";
import { Nav } from "./styles";
import { CategoryCardLink } from "./CategoryCardLink";

export const CategoriesNav = ({ categories }: { categories: TCategory[] }) => {
  return (
    <Nav>
      {categories.map((c) => (
        <CategoryCardLink key={c.id} category={c} />
      ))}
    </Nav>
  );
};
