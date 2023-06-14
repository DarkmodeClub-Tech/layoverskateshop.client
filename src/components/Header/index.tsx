import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from "react";
import { StyledHeader } from "./styles";

const Header = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [products, setProducts] = useState([]);
  return (
    <StyledHeader>
      <Link href="/" className="logo_container">
        <Image src="/g1725.svg" alt="" width={100} height={100} />
        <span>Layover Skateshop</span>
      </Link>
      <form onSubmit={() => ""}>
        <label htmlFor="search">Pesquise o que deseja</label>
        <input
          placeholder="Pesquise o que deseja"
          onChange={(event) => setSearchFieldValue(event.target.value)}
          type="text"
          name="search"
          id="search"
        />
        <button type="submit">{<BiSearchAlt size={50} />}</button>
      </form>
      <section className="header-nav">
        <Link href="/login">
          <FaUserAstronaut size={30} /> Entrar
        </Link>
        <Link href="#">
          <MdOutlineShoppingCart size={30} />
        </Link>
      </section>
    </StyledHeader>
  );
};
export default Header;
