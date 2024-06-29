import { List } from "@mui/icons-material";
import { Product } from "../Model/Product";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((item: Product) => (
        <Grid item xs={3} key={item.id}>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
