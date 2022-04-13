import { Container, IconButton, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Spinner from "../components/Spinner/Spinner";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./pages.css";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  return (
    <Container maxWidth="lg">
      <div>
        <Paper>
          <div className="prodDetail">
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIosNewIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
            <h1>RPODDETAIL</h1>
          </div>
          {forEditVal ? (
            <>
              <img width="75%" src={forEditVal.img} alt="" />
              <div>
                <h3>{forEditVal.title}</h3>
                <p>{forEditVal.type}</p>
              </div>
              <p>{forEditVal.description}</p>
              <p>
                $<strong>{forEditVal.price}</strong>
              </p>
            </>
          ) : (
            <Spinner />
          )}
        </Paper>
      </div>
    </Container>
  );
};

export default ProdDetail;
