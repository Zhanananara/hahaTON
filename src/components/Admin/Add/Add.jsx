import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../contexts/ProductContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();
  return (
    <div>
      <div style={{ display: "flex" }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon fontSize="large" sx={{ color: "black" }} />
        </IconButton>
        <h2>U can add a new product</h2>
      </div>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
