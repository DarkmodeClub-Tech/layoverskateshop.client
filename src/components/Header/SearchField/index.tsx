import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TProduct } from "../../../interfaces";
import { StyledContainerDiv, StyledForm, StyledUL } from "./styles";
import { ProductsContext } from "../../../contexts/product.context";
import Link from "next/link";

export const SearchField = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { products } = useContext(ProductsContext);
  const [foundProducts, setFoundProducts] = useState<TProduct[]>([]);

  const searchProductsByTitle = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTimeout(() => {
      setIsSearching(true);
      const p = products.filter((p) => {
        const searchFieldValue = event.target.value;
        const productTitle = p.title.split(" ").join("")?.toLowerCase();
        console.log(searchFieldValue);

        return productTitle.includes(searchFieldValue.toLowerCase());
      });
      if (p.length > 0) setFoundProducts(p);
      else setFoundProducts([]);
    }, 400);
  };

  return (
    <StyledContainerDiv
      onMouseOverCapture={() => setIsSearching(true)}
      onMouseOut={() => setIsSearching(false)}
    >
      <StyledForm onSubmit={(event) => ""}>
        <label htmlFor="search">Pesquise o que deseja</label>
        <input
          placeholder="Pesquise o que deseja"
          onChange={(event) => searchProductsByTitle(event)}
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
