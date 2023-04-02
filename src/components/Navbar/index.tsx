import Link from "next/link";
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Link href="#">Roupas</Link>
      <Link href="#">Tenis</Link>
      <Link href="#">Acessórios</Link>
      <Link href="#">Shape</Link>
      <Link href="#">Lixa</Link>
      <Link href="#">Rodas</Link>
      <Link href="#">Rolamentos</Link>
    </Nav>
  );
};
export default Navbar;
