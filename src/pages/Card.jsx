import { Button } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { notify } from "../components/Toastify/Toastify";
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    function payCard() {
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
              onClick={() => payCard()}
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
}
