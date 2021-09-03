import React, { useState} from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [CartValue,setCartValue]=useState(false);
  const showCart=()=>{
    setCartValue(true);
  }
  const hideCart=()=>{setCartValue(false);
  }
  return (
    <CartProvider>
      {CartValue && <Cart onHide={hideCart}></Cart>}
      <Header onShow={showCart}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
