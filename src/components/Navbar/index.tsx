import Link from "next/link";
import { Nav, ProductListNav } from "./styles";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.context";
import { UserContext } from "../../contexts/user.context";

const Navbar = () => {
  const { products, categories } = useContext(ProductsContext);
  const { isLoading, setIsLoading } = useContext(UserContext);

  const [category, setCategory] = useState("");
  const [showByCategory, setShowByCategory] = useState(false);

  return (
    <>
      <Nav>
        {categories.map((c) => {
          return (
            <a
              key={c.id}
              href="#"
              onMouseOverCapture={() => {
                setShowByCategory(true);
                setCategory(c.title);
              }}
              onMouseOutCapture={() => setShowByCategory(false)}
            >
              {c.title}
            </a>
          );
        })}
      </Nav>
      {showByCategory ? (
        <ProductListNav
          onMouseOverCapture={() => setShowByCategory(true)}
          onMouseOutCapture={() => setShowByCategory(false)}
        >
          <ul>
            {products
              .filter((p) => p.category.title === category)
              .map((p) => {
                return (
                  <li key={p.id}>
                    <Link
                      href={`/${encodeURIComponent(p.id)}`}
                      onClick={() => setIsLoading(true)}
                      className="product-link"
                    >
                      <figure>
                        <img src={p.photos[0].url} alt="product photo" />
                      </figure>
                      <span className="title">{p.title.slice(0, 20)}</span>
                      <p className="product-price">
                        {Number(p?.price).toLocaleString("pt-BR", {
                          currency: "BRL",
                          style: "currency",
                        })}
                      </p>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </ProductListNav>
      ) : (
        <></>
      )}
    </>
  );
};
export default Navbar;
