import Image from "next/image";

import { products } from "../assets/database";
import List from "../components/List";
import { Navbar } from "../components/Navbar/styles";
import { Section } from "../components/Section/styles";
import Slider from "../components/Slider";

const HomePage = () => {
  const sliderImgs = [
    "Tenis.jpg",
    // "truck.jpeg",
    "truck1.png",
    "Tenis.jpg",
    "Tenis.jpg",
    // "Tenis.jpg",
    // "Tenis.jpg",
  ];
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
      <Slider imageURLsList={sliderImgs} />
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
