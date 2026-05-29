import { useState } from "react";

export default function SimpleButton({ name, onClick }) {
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  );
}
