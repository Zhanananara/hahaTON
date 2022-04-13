import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { useCart } from "../../../contexts/CartContextProvider";
import { useFav } from "../../../contexts/FavContextProvider";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));
  const { addDelToFav, isProdInFav } = useFav();
  const [inFav, setInFav] = React.useState(isProdInFav(item.id));
  const { pathname } = useLocation();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          height: 600,
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
          height="400"
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
            onClick={() => {
              addDelToFav(item);
              setInFav(isProdInFav(item.id));
            }}
            label="infav"
            value="infav"
            sx={{ width: 120 }}
            icon={
              inFav ? (
                <BookmarkRemoveIcon sx={{ color: "red" }} />
              ) : (
                <BookmarkAddIcon />
              )
            }
          />
          {pathname !== `detail/${item.id}` ? (
            <BottomNavigationAction
              component={Link}
              to={`detail/${item.id}`}
              label="detail"
              value="detail"
              icon={<ReadMoreIcon />}
            />
          ) : null}
        </BottomNavigation>
      </Card>
    </Grid>
  );
}
