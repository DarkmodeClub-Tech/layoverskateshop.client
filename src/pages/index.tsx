import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { products } from "../assets/database";
import List from "../components/List";

const HomePage = () => {
  return (
    <section>
      <Header />
      <List products={products} />
    </section>
  );
};
export default HomePage;
