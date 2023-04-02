import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";

import { products } from "../assets/database";
import List from "../components/List";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
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
      <Slider imageURLsList={sliderImgs}>
        <div className="add">
          <Image src="/g1725-black.svg" alt="" width={100} height={100} />

          <p>As melhores marcas você encontra aqui.</p>
          <span>
            <TbTargetArrow size={50} />
          </span>
        </div>
      </Slider>
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
