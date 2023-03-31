import Image from "next/image";

import { products } from "../assets/database";
import List from "../components/List";
import { Navbar } from "../components/Navbar/styles";
import { Section } from "../components/Section/styles";

const HomePage = () => {
  return (
    <>
      <Navbar>
        <a>Roupas</a>
        <a>Tenis</a>
        <a>Acessórios</a>
        <a>Shape</a>
        <a>Lixa</a>
        <a>Rodas</a>
        <a>Rolamentos</a>
      </Navbar>
      <Section>
        <List
          title="Camisetas"
          products={products.filter((p) => p.category === "camiseta")}
        />
      </Section>
      <Section>
        <List
          title="Bonés"
          products={products.filter((p) => p.category === "bone")}
        />
      </Section>
    </>
  );
};
export default HomePage;
