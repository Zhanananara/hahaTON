import React, { useEffect } from "react";
import { useFav } from "../contexts/FavContextProvider";
import { Link } from "react-router-dom";

import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Button, Container } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import emptyCart from "../img/empty-cart.png";

const Fav = () => {
  const { fav, getFav, deleteProdInFav } = useFav();
  useEffect(() => {
    getFav();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <h1>Favorite</h1>
        <Box>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{ display: "flex", marginBottom: "10px" }}
          >
            {fav?.products.length > 0 ? (
              <>
                {/* new fav */}
                {fav.products.map((elem) => (
                  <Card
                    sx={{ display: "flex", marginRight: "10px" }}
                    key={elem.item.id}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
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
                          onClick={() => deleteProdInFav(elem.item.id)}
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
                      sx={{ width: 151 }}
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
        </Box>
      </Container>
    </div>
  );
};

export default Fav;
