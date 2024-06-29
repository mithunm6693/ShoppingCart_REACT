import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "@mui/icons-material";
import Catalog from "../../components/Catalog";
import ProductDetails from "../../components/catalog/ProductDetails";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
