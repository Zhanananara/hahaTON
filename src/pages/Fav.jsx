import React, { useEffect } from "react";
import { useFav } from "../contexts/FavContextProvider";
import { Link } from "react-router-dom";

import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import emptyCart from "../file/empty-cart.png";
import { notify } from "../components/Toastify/Toastify";

const Fav = () => {
  const { fav, getFav, deleteProdInFav } = useFav();
  useEffect(() => {
    getFav();
  }, []);

  return (
    <div>
      <Container maxWidth="xl" xs={12} sm={6} md={6}>
        <h1 style={{ textAlign: "center" }}>Wishlist</h1>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            marginBottom: "10px",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {fav?.products.length > 0 ? (
            <>
              {/* new fav */}
              {fav.products.map((elem) => (
                <Card
                  elevation={24}
                  sx={{
                    display: "flex",
                    marginRight: "10px",
                    width: 400,
                    height: 350,
                    margin: "20px auto",
                  }}
                  key={elem.item.id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      width: 200,
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{ minWidth: 100 }}
                      >
                        {elem.item.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {elem.item.type}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton
                        onClick={() => (
                          deleteProdInFav(elem.item.id),
                          notify(
                            "success",
                            `products ${elem.item.title} has deleted`
                          )
                        )}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        component={Link}
                        to={`/products/detail/${elem.item.id}`}
                        label="detail"
                        value="detail"
                      >
                        <ReadMoreIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "200px",
                      paddingRight: "10px",
                      textAlign: "center",
                      float: "right",
                    }}
                    src={elem.item.img}
                    alt={elem.item.title}
                  />
                </Card>
              ))}
            </>
          ) : (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img width="100%" src={emptyCart} alt="" />
              <br />
              <Button variant="contained" component={Link} to="/products">
                Go shopping
              </Button>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Fav;
