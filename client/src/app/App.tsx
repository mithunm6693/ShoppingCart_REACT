import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "../Model/Product";
import Catalog from "../components/Catalog";
import { Container, CssBaseline, Typography } from "@mui/material";
import Header from "../components/Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function AddProduct() {
    setProducts((PrevState) => [
      ...PrevState,
      {
        name: "Product-" + (PrevState.length + 1),
        price: (PrevState.length + 1) * 100,
        brand: "some brand",
        description: "some description",
        id: PrevState.length + 101,
        type: "some Type",
      },
    ]);
  }

  useEffect(() => {
    fetch("https://localhost:5000/api/Products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={AddProduct} />
      </Container>
    </>
  );
}

export default App;
