import Link from "next/link";
import { Nav } from "./styles";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/product.context";

const Navbar = () => {
  const { products } = useContext(ProductsContext);
  const [category, setCategory] = useState("");
  const [showByCategory, setShowByCategory] = useState(false);

  return (
    <>
      <Nav>
        <Link
          href="#"
          onMouseOver={() => {
            setShowByCategory(true);
            setCategory("tshirt");
          }}
          onMouseOut={() => setShowByCategory(false)}
        >
          <img src="" alt="" />
          Camisetas
        </Link>
        <Link href="#">
          <img src="" alt="" />
          Tenis
        </Link>
        <Link href="#">
          <img src="" alt="" />
          Acessórios
        </Link>
        <Link href="#">
          <img src="" alt="" />
          Shape
        </Link>
        <Link href="#">
          <img src="" alt="" />
          Lixa
        </Link>
        <Link href="#">
          <img src="" alt="" />
          Rodas
        </Link>
        <Link href="#">
          <img src="" alt="" />
          Rolamentos
        </Link>
      </Nav>
      {showByCategory ? (
        <section>
          <ul>
            {products
              .filter((p) => p.category.title === category)
              .map((p) => {
                return (
                  <li>
                    <img src={p.photos[0].url} alt="" />
                  </li>
                );
              })}
          </ul>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
export default Navbar;
