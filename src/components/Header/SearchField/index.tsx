import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TProduct } from "../../../interfaces";
import { StyledContainerDiv, StyledForm, StyledUL } from "./styles";
import { ProductsContext } from "../../../contexts/product.context";
import Link from "next/link";

export const SearchField = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [query, setQuery] = useState<string | null>(null);
  const { products, getProductsList } = useContext(ProductsContext);
  const [foundProducts, setFoundProducts] = useState<TProduct[]>([]);

  const searchProductsByTitleOrDescription = (search: string) => {
    const p = products.filter((p) => {
      const productTitle = p.title.split(" ").join("")?.toLowerCase();
      const productDescription = p.description.toLowerCase().split(" ");

      return (
        productDescription.includes(search) ||
        productTitle.includes(search.toLowerCase())
      );
    });

    if (p.length > 0) setFoundProducts(p);
    else setFoundProducts([]);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    setIsSearching(true);

    setTimeout(() => {
      if (query) searchProductsByTitleOrDescription(query);
    }, 400);
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getProductsList(`/products?search=${query}`);
    if (data && data.length) setFoundProducts(data);
  };
  return (
    <StyledContainerDiv
      onMouseOverCapture={() => setIsSearching(true)}
      onMouseOut={() => setIsSearching(false)}
    >
      <StyledForm onSubmit={(event) => onSubmitHandler(event)}>
        <label htmlFor="search">Pesquise o que deseja</label>
        <input
          placeholder="Pesquise o que deseja"
          onChange={(event) => onChangeHandler(event)}
          type="text"
          name="search"
          id="search"
        />
        <button type="submit">{<BiSearchAlt size={50} />}</button>
      </StyledForm>
      {isSearching && foundProducts.length > 0 ? (
        <StyledUL onMouseOverCapture={() => setIsSearching(true)}>
          {foundProducts.map((p) => (
            <li key={p.id}>
              <Link href={`/${p.id}`}>
                <figure className="product-figure">
                  {/* eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src={p.photos[0].url}
                    alt="product photo"
                    className="product-img"
                  />
                  <figcaption>
                    {p.title}{" "}
                    <span className="product-price">
                      {Number(p?.price).toLocaleString("pt-BR", {
                        currency: "BRL",
                        style: "currency",
                      })}
                    </span>
                    <span className="product-category">{p.category.title}</span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </StyledUL>
      ) : (
        <></>
      )}
    </StyledContainerDiv>
  );
};
