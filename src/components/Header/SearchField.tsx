"use client";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TProduct } from "../../interfaces";
import { SearchFieldForm } from "./styles";
import { useProductsContext } from "../../app/contexts/";
import { SearchFieldContainer } from "./styles";
import { FoundProductsList } from "./FoundProductsList";

export const SearchField = ({ products }: { products: TProduct[] }) => {
  const [query, setQuery] = useState<string | null>(null);
  const { getProductsList, foundProducts, setFoundProducts } =
    useProductsContext();

  const { isOpenFoundProductsList, setIsOpenFoundProductsList } =
    useProductsContext();

  const searchProductsByTitleOrDescription = (
    search: string,
    products: TProduct[]
  ) => {
    const p = products.filter((p) => {
      const productTitle = p.title.split(" ").join("")?.toLowerCase();
      const productDescription = p.description.toLowerCase().split(" ");
      console.log(products.length);
      return (
        productDescription.includes(search.toLowerCase()) ||
        productTitle.includes(search.toLowerCase())
      );
    });

    // if (p.length > 0) {
    setFoundProducts(p);
    // } else setFoundProducts([]);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    setIsOpenFoundProductsList(true);

    setTimeout(() => {
      if (query && products.length > 0)
        searchProductsByTitleOrDescription(query, products);
    }, 400);
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getProductsList(`/products?search=${query}`);
    if (data && data.length) setFoundProducts(data);
  };

  return (
    <SearchFieldContainer
      onMouseOverCapture={() => setIsOpenFoundProductsList(true)}
      onMouseOut={() => setIsOpenFoundProductsList(false)}
    >
      <SearchFieldForm onSubmit={(event) => onSubmitHandler(event)}>
        <label htmlFor="search">Pesquise o que deseja</label>
        <input
          placeholder="Pesquise o que deseja"
          onChange={(event) => onChangeHandler(event)}
          type="text"
          name="search"
          id="search"
        />
        <button type="submit">{<BiSearchAlt size={50} />}</button>
      </SearchFieldForm>
      <FoundProductsList foundProducts={foundProducts} />
    </SearchFieldContainer>
  );
};
