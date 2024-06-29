import { useEffect, useState } from "react";
import { Product } from "../Model/Product";
import ProductList from "./ProductList";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/Products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default Catalog;
