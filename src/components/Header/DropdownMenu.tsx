"use client";

import { useContext, useState } from "react";
import { UserContext } from "../../app/contexts/user";
import { DropDownMenuContainer } from "./styles";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { DropdownMenuNav } from "./DropdownMenuNav";
import { TUser } from "@/interfaces";

export const DropDownUserMenu = ({ user }: { user: TUser }) => {
  const { isOpenHeaderDropDownMenu, setIsOpenHeaderDropDownMenu } =
    useContext(UserContext);

  return isOpenHeaderDropDownMenu ? (
    <DropDownMenuContainer>
      <span className="menu-header-title">
        <AiOutlineMenuUnfold size={30} />
        {user && user?.first_name}
        <BiDownArrow size={20} />
      </span>
      <DropdownMenuNav user={user} />
    </DropDownMenuContainer>
  ) : (
    <></>
  );
};
