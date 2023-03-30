import React from "react";
import { products } from "../assets/database";
import List from "../components/List";
import { Section } from "../components/Section/styles";

const HomePage = () => {
  return (
    <Section>
      <h2>Camisetas</h2>
      <List products={products.filter((p) => p.category === "camiseta")} />

      <h2>Bonés</h2>
      <List products={products.filter((p) => p.category === "bone")} />
    </Section>
  );
};
export default HomePage;
