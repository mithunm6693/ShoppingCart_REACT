import { useEffect, useState } from "react";
import { Product } from "../Model/Product";
import ProductList from "./ProductList";
import agent from "../app/api/agent";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.catalog.list().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default Catalog;
