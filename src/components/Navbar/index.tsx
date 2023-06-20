import Link from "next/link";
import { Nav, ProductListNav } from "./styles";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.context";

const Navbar = () => {
  const { products, categories } = useContext(ProductsContext);

  const [category, setCategory] = useState("");
  const [showByCategory, setShowByCategory] = useState(false);

  return (
    <>
      <Nav>
        {categories.map((c) => {
          return (
            <Link
              href=""
              onMouseOverCapture={() => {
                setShowByCategory(true);
                setCategory(c.title);
              }}
              onMouseOutCapture={() => setShowByCategory(false)}
            >
              {c.title}
            </Link>
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
                    <Link href={`/${encodeURIComponent(p.id)}`}>
                      <figure>
                        <img src={p.photos[0].url} alt="product photo" />
                      </figure>
                      <span>{p.title.slice(0, 20) + "..."}</span>
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
