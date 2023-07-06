import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/user.context";
import Link from "next/link";
import { StyledDiv, StyledNav } from "./styles";
import { FaUserAstronaut } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";

export const DropDownUserMenu = () => {
  const { user } = useContext(UserContext);
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  return (
    <StyledDiv>
      <span
        className="menu-header-title"
        onMouseOverCapture={() => setShowMenuOptions(true)}
      >
        <FaUserAstronaut size={30} />
        {user.first_name}
        <BiDownArrow size={20} />
      </span>
      {showMenuOptions ? (
        <StyledNav>
          <Link href="/updateProfile">Editar Perfil</Link>
          <Link href="/updateAddress">Editar Endereço</Link>
          <Link href="/orders">Meus Pedidos</Link>
          <Link href="/">Sair</Link>
        </StyledNav>
      ) : (
        <></>
      )}
    </StyledDiv>
  );
};
