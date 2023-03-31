import { StyledFooter } from "./styles";
import Image from "next/image";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-container">
        <Image src="/g1725.svg" alt="" width={100} height={100} />
        <span> Layover Skateshop</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
