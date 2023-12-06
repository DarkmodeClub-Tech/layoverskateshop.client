"use client";

import { ReactNode } from "react";
import { UserProvider, ProductsProvider } from "../contexts/";
import { GlobalStyle } from "@/global/styles";
import StyledComponentsRegistry from "../lib/registry";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ProductsProvider>
        <GlobalStyle />
        <UserProvider>{children}</UserProvider>
      </ProductsProvider>
    </StyledComponentsRegistry>
  );
};
