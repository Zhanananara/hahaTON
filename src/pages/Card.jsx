import { Button } from "@mui/material";
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { notify } from "../components/Toastify/Toastify";
const Card = () => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  function handleSubmit() {
    if (!data.cvc || !data.expiry || !data.name || !data.number) {
      alert("wrong");
    } else {
      notify("success", "Order successfully completed");
    }
    return (
      <div id="PaymentForm">
        <Cards
          style={{ margin: "5vh" }}
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form
          style={{
            margin: "5vh auto",
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <input
            style={{ backgroundColor: "black", height: "40px" }}
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            style={{ backgroundColor: "black", height: "40px" }}
            type="tel"
            name="name"
            placeholder="Name Lastname"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            style={{ backgroundColor: "black", height: "40px" }}
            type="tel"
            name="expiry"
            placeholder="Valid thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            style={{ backgroundColor: "black", height: "40px" }}
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Link to="/">
            <Button
              onClick={() => handleSubmit()}
              style={{ color: "white" }}
              variant="contained"
              color="grey"
            >
              Billing
            </Button>
          </Link>
        </form>
      </div>
    );
  }
};
export default Card;
