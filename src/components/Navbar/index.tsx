import Link from "next/link";
import { Nav } from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";

const Navbar = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Nav>
      <Link href="#">
        <img src="" alt="" />
        Roupas
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
  );
};
export default Navbar;
