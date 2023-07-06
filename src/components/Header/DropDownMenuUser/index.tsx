import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/user.context";
import Link from "next/link";
import { StyledDiv, StyledNav } from "./styles";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

export const DropDownUserMenu = () => {
  const { user, logout } = useContext(UserContext);
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  return (
    <StyledDiv
      onMouseOverCapture={() => setShowMenuOptions(true)}
      onMouseOut={() => setShowMenuOptions(false)}
    >
      <span className="menu-header-title">
        <AiOutlineMenuUnfold size={30} />
        {user && user?.first_name}
        <BiDownArrow size={20} />
      </span>
      {showMenuOptions ? (
        <StyledNav
          onMouseOverCapture={() => setShowMenuOptions(true)}
          onMouseOut={() => setShowMenuOptions(false)}
        >
          <span className="menu-header-title">
            <AiOutlineMenuFold size={30} />
            {user && user?.first_name}
            <BiUpArrow size={20} />
          </span>
          <Link href="/updateProfile">Editar Perfil</Link>
          <Link href="/updateAddress">Editar Endereço</Link>
          <Link href="/orders">Meus Pedidos</Link>
          <Link href="/" onClick={() => logout()}>
            Sair
          </Link>
        </StyledNav>
      ) : (
        <></>
      )}
    </StyledDiv>
  );
};
