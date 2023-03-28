import Image from "next/image";

import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { StyledHeader } from "./styles";

const Header = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [products, setProducts] = useState([]);
  return (
    <StyledHeader>
      <div className="logo_container">
        <Image src="/g1725.svg" alt="" width={100} height={100} /> Layover
        Skateshop
      </div>
      <form onSubmit={() => ""}>
        <label htmlFor="search">Pesquise o que deseja</label>
        <input
          onChange={(event) => setSearchFieldValue(event.target.value)}
          type="text"
          name="search"
          id="search"
        />
        <button type="submit">{<BiSearchAlt size={50} />}</button>
      </form>

      <a href="#">Sobre</a>
      <a href="#">Contato</a>
      <a href="#">Carrinho</a>
    </StyledHeader>
  );
};
export default Header;
