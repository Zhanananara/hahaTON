import { Container } from "@mui/material";
import React from "react";
import ProdList from "../components/Products/ProdList/ProdList";

const Products = () => {
  return (
    <Container maxWidth="xl">
      <ProdList />
    </Container>
  );
};

export default Products;
