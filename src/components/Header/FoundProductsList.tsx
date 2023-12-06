import Link from "next/link";
import { FoundProductsListUl } from "./styles";
import { useProductsContext } from "@/app/contexts";
import { TProduct } from "@/interfaces";
import { FoundProductCardLink } from "./FoundProductCardLink";

export const FoundProductsList = ({
  foundProducts,
}: {
  foundProducts: TProduct[];
}) => {
  const { isOpenFoundProductsList, setIsOpenFoundProductsList } =
    useProductsContext();
  return isOpenFoundProductsList && foundProducts.length > 0 ? (
    <FoundProductsListUl
      onMouseOverCapture={() => setIsOpenFoundProductsList(true)}
    >
      {foundProducts.map((p) => (
        <li key={p.id}>
          <FoundProductCardLink key={p.id} product={p} />
        </li>
      ))}
    </FoundProductsListUl>
  ) : (
    <></>
  );
};
