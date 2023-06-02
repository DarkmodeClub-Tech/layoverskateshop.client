import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";

// import { products } from "../assets/database";
import List from "../components/List";
import LoginForm from "../components/Forms/LoginForm";
import Navbar from "../components/Navbar";
import { Section } from "../components/Section/styles";
import Slider from "../components/Slider";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TProduct } from "../interfaces";

export const getStaticProps = async () => {
  const res = await fetch("https://lvr-server.onrender.com/products");
  const products = await res.json();
  return { props: { products } };
};

const HomePage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sliderImgs = [
    // "pexels-kaique-rocha-561652.jpg",
    "brand-betterOne.gif",
    // "pexels-luis-dalvan-1770813.jpg",
    // "truck.jpeg",
    // "Tenis.jpg",
    // "Tenis.jpg",
    // "Tenis.jpg",
    // "Tenis.jpg",
  ];
  console.log(products);
  return (
    <>
      <Slider imageURLsList={sliderImgs}>
        <div className="add">
          {/* <Image src="/g1725-black.svg" alt="" width={100} height={100} /> */}
          {/* <p>
            As melhores marcas do mundo <span>SKATEBOARD</span>
          </p>
          <p>você encontra aqui.</p> */}
        </div>
      </Slider>
      <Section>
        <List
          title="Camisetas"
          products={products.filter(
            (p: TProduct) => p.category.title === "tshirt"
          )}
        />
      </Section>
      <Section>
        <List
          title="Shapes"
          products={products.filter(
            (p: TProduct) => p.category.title === "shape"
          )}
        />
      </Section>
      <Section>
        <List
          title="Rodas"
          products={products.filter(
            (p: TProduct) => p.category.title === "wheels"
          )}
        />
      </Section>
      <Section>
        <List
          title="Tênis"
          products={products.filter(
            (p: TProduct) => p.category.title === "shoes"
          )}
        />
      </Section>
    </>
  );
};
export default HomePage;
