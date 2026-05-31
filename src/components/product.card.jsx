import { useState } from "react";
import SimpleButton from "./simple.button";

export default function ProductCard({
  name,
  price,
  category,
  description,
  initialStock,
}) {
  const [quantity, setQuantity] = useState(0);

  const [isFavorite, setIsFavorite] = useState(false);

  function add() {
    setQuantity((prev) => (prev < initialStock ? prev + 1 : prev));
  }
  function remove() {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <>
      <h2>{name}</h2>
      <p>{`Price: ${price} €`}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>
        Quantity: <strong>{quantity}</strong>
      </p>

      <SimpleButton name={"+"} onClick={add} />
      <SimpleButton name={"-"} onClick={remove} />
    </>
  );
}
