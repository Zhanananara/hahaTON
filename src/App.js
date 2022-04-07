// import { createContext } from "react";
import "./App.css";
import Toastify from "./components/Toastify/Toastify";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <CartContextProvider>
    <ProductContextProvider>
      <Toastify />
      <MyRoutes />
    </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
