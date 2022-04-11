import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
  number: "",
};

const Card = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //todo ===> EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && forEditVal) {
      setInpValues(forEditVal);
    }
  }, [forEditVal]);

  //todo ===> END OF EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };
    saveValues(obj);
  };

  return (
    <div>
      <img
        width="30%"
        src="https://www.pinpng.com/pngs/m/645-6455339_cc-icon-credit-card-payment-vector-hd-png.png"
        alt=""
      />
      <h2>Form</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
        }}
      >
        <TextField
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={inpValues.type}
            label="Card type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={10}>Visa</MenuItem>
            <MenuItem value={20}>Elcart</MenuItem>
            <MenuItem value={30}>Mastercard</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="number"
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Card number"
          variant="outlined"
        />
        <TextField
          type="number"
          name="number"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
        />
        <TextField
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Your wishes"
          variant="outlined"
          multiline
          rows={3}
        />

        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Card;
