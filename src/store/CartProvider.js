import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItems = state.items[existingCartItemsIndex];
    let updatedItems;
    if (existingCartItems) {
      const updatedItem = {
        ...existingCartItems,
        amount: existingCartItems.amount + action.item.amount
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const existingCartItemsIndex=state.items.findIndex(item=>item.id===action.id);
    const existingCartItem=state.items[existingCartItemsIndex];
    const updatedTotalAmount=state.totalAmount - existingCartItem.price;
    let updatedItems;
    if(existingCartItem.amount===1){
      updatedItems=state.items.filter(item=> item.id !== action.id)
    }
    else{
      const updatedItem={...existingCartItem,amount:existingCartItem.amount-1};
      updatedItems=[...state.items]
      updatedItems[existingCartItemsIndex]=updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
