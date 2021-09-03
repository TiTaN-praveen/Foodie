import { useContext,useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsBumped,setButtonIsBumped]=useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;}, 0);
    const {items}=cartCtx;

    const btnClasses=`${classes.button} ${buttonIsBumped ?classes.bump:""}`
    useEffect(()=>{if(items.length===0){
      return;
    }
      setButtonIsBumped(true);
      const timer=setTimeout(()=>{setButtonIsBumped(false)},100)
      return()=>{
      clearTimeout(timer)}
    },[items])
  return (
    <button className={btnClasses} onClick={props.onShows}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
