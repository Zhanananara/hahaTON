import React, { createContext, useContext, useReducer } from "react";
import { FAV } from "../helpers/consts";

const favContext = createContext();

export const useFav = () => {
  return useContext(favContext);
};

const INIT_STATE = {
  fav: JSON.parse(localStorage.getItem("fav")),
  favLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAV.GET_FAV_LENGTH:
      return {
        ...state,
        favLength: action.payload,
      };
    case FAV.GET_FAV:
      return {
        ...state,
        fav: action.payload,
      };
    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function createFavFromLS() {
    let fav = JSON.parse(localStorage.getItem("fav"));

    if (!fav) {
      fav = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    return fav;
  }

  // add and delete
  const addDelToFav = (prod) => {
    let fav = createFavFromLS();

    let newProd = {
      item: prod,
      count: 1,
      subPrice: prod.price,
    };

    let checkProdInFav = fav.products.some((obj) => {
      return obj.item.id === prod.id;
    });
    if (checkProdInFav) {
      fav.products = fav.products.filter((obj) => {
        return obj.item.id !== prod.id;
      });
    } else {
      fav.products.push(newProd);
    }
    localStorage.setItem("fav", JSON.stringify(fav));
    getFavLength();
    dispatch({
      type: FAV.GET_FAV,
      payload: fav,
    });
  };

  const getFavLength = () => {
    let fav = createFavFromLS();
    dispatch({
      type: FAV.GET_FAV_LENGTH,
      payload: fav.products.length,
    });
  };

  const isProdInFav = (id) => {
    let fav = createFavFromLS();

    let exist = fav.products.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const getFav = () => {
    let fav = createFavFromLS();
    dispatch({
      type: FAV.GET_FAV,
      payload: fav,
    });
  };

  const deleteProdInFav = (id) => {
    let fav = createFavFromLS();
    fav.products = fav.products.filter((elem) => {
      return elem.item.id !== id;
    });
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
    getFavLength();
  };

  return (
    <favContext.Provider
      value={{
        favLength: state.favLength,
        fav: state.fav,
        addDelToFav,
        getFavLength,
        isProdInFav,
        getFav,
        deleteProdInFav,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavContextProvider;
