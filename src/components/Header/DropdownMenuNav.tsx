"use client";

import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { DropDownMenuNavContainer } from "./styles";
import { TUser } from "@/interfaces";
import { BiUpArrow } from "react-icons/bi";
import { useUserContext } from "@/app/contexts";

export const DropdownMenuNav = ({ user }: { user: TUser }) => {
  const { isOpenHeaderDropDownMenu, setIsOpenHeaderDropDownMenu, logout } =
    useUserContext();
  return (
    <DropDownMenuNavContainer
      onMouseOverCapture={() => setIsOpenHeaderDropDownMenu(true)}
      onMouseOut={() => setIsOpenHeaderDropDownMenu(false)}
    >
      <span className="menu-header-title">
        <AiOutlineMenuFold size={30} />
        {user.first_name}
        <BiUpArrow size={20} />
      </span>
      <Link href="/updateProfile">Editar Perfil</Link>
      <Link href="/updateAddress">Editar Endereço</Link>
      <Link href="/orders">Meus Pedidos</Link>
      <Link href="/" onClick={() => logout()}>
        Sair
      </Link>
    </DropDownMenuNavContainer>
  );
};
