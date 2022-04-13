import "./App.css";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MyRoutes from "./MyRoutes";
import Toastify from "./components/Toastify/Toastify";
import CartContextProvider from "./contexts/CartContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import FavContextProvider from "./contexts/FavContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <FavContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <Toastify />
            <MyRoutes />
          </ProductContextProvider>
        </CartContextProvider>
      </FavContextProvider>
    </AuthContextProvider>
  );
}

export default App;
