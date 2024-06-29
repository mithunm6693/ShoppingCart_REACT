import { Button } from "@mui/material";
import { Product } from "../Model/Product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ProductList products={products}></ProductList>
      <Button variant="outlined" onClick={addProduct}>
        Add
      </Button>
    </>
  );
}

export default Catalog;
