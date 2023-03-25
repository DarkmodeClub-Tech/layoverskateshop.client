import logo from "../../../public/Sem título.png";
import logo2 from "../../../public/lyvr-icon-black.png";
import logo3 from "../../../public/new_logo_lvr_sk8shop.svg";
import logo4 from "../../../public/g1725.svg";

import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { StyledHeader } from "./styles";

const Header = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [products, setProducts] = useState([]);
  return (
    <StyledHeader>
      <div className="logo_container">
        <img src={logo4} alt="" /> Layover Skateshop
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
