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

  payCard = () => {
    if (
      !this.state.number ||
      !this.state.cvc ||
      !this.state.name ||
      !this.state.expiry
    ) {
      alert("Fill in the fields");
    } else {
      notify("success", "Order successfully completed");
    }
  };

  render() {
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
            style={{ backgroundColor: "black", color: "white", height: "40px" }}
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            style={{ backgroundColor: "black", height: "40px", color: "white" }}
            type="tel"
            name="name"
            placeholder="Name Lastname"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            style={{ backgroundColor: "black", color: "white", height: "40px" }}
            type="tel"
            name="expiry"
            placeholder="Valid thru"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            style={{ backgroundColor: "black", color: "white", height: "40px" }}
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <Button
            onClick={() => this.payCard()}
            style={{ color: "black", backgroundColor: "white" }}
            variant="contained"
            color="grey"
          >
            Billing
          </Button>
        </form>
      </div>
    );
  }
}
