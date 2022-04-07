import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
<<<<<<< HEAD
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from "../../../contexts/CartContextProvider";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export default function OneProduct({ item }) {
  const{addDelToCart, isProdInCart} = useCart();
  const [inCart,setInCart] = React.useState(isProdInCart(item.id))
  // console.log((item.id))
=======
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "../../../contexts/CartContextProvider";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const [inCart, setInCart] = React.useState(isProdInCart(item.id));
>>>>>>> 4e173b3cc2de3f4824f2d3f26d0502756b9ca8ec

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h6" color="green">
            ${item.price}
          </Typography>
          <Typography variant="body1">Type: {item.type}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
<<<<<<< HEAD
          color={inCart? 'secondary':'inherit'}
          onClick={()=>{addDelToCart(item);
          setInCart(isProdInCart(item.id))
          }}
          >
            {inCart?<RemoveShoppingCartIcon/>:<AddShoppingCartIcon/>}
=======
            color={inCart ? "secondary" : "inherit"}
            onClick={() => {
              addDelToCart(item);
              setInCart(isProdInCart(item.id));
            }}
          >
            <ShoppingCartIcon />
>>>>>>> 4e173b3cc2de3f4824f2d3f26d0502756b9ca8ec
          </IconButton>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
