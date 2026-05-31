import { useState } from "react";
import "./App.css";
import ProductCard from "./components/product.card";
import SimpleButton from "./components/simple.button";

function App() {
  const product = {
    name: "Nike",
    price: 50,
    category: "Shoes",
    description: "These shoes are designed for athletes.",
    initialStock: 10,
  };
  return (
    <>
      <ProductCard
        name={product.name}
        price={product.price}
        category={product.category}
        description={product.description}
        initialStock={product.initialStock}
      />
    </>
  );
}

export default App;
