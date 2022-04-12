import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { useCart } from "../../../contexts/CartContextProvider";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          height: 500,
          maxWidth: "lg",
          margin: "auto",
        }}
        elevation={24}
      >
        <CardHeader
          title={item.title}
          variant="h6"
          sx={{ margin: " 0 auto", textAlign: "center" }}
        />
        <CardMedia
          component="img"
          height="300"
          image={item.img}
          alt={item.title}
        />
        <CardContent sx={{}}>
          {/* <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography> */}
          <Typography variant="h6" color="green">
            ${item.price}
          </Typography>
          <Typography variant="body1">Type: {item.type}</Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography> */}
        </CardContent>

        <BottomNavigation>
          <BottomNavigationAction
            onClick={() => {
              addDelToCart(item);
              setInCart(isProdInCart(item.id));
            }}
            label="incart"
            value="incart"
            sx={{ width: 120 }}
            icon={
              inCart ? (
                <RemoveShoppingCartIcon sx={{ color: "red" }} />
              ) : (
                <AddShoppingCartIcon />
              )
            }
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />{" "}
          <BottomNavigationAction
            component={Link}
            to={`detail/${item.id}`}
            label="detail"
            value="detail"
            icon={<ReadMoreIcon />}
          />
        </BottomNavigation>
      </Card>
    </Grid>
  );
}
