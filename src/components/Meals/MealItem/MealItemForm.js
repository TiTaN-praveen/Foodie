import classes from "./MealItemForm.module.css";
import { useRef,useState } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
    const[amountValid,setAmountValid]=useState(true);
    const amountInputRef=useRef()
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount= amountInputRef.current.value;
    const enteredAmountNum= +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 6){
        setAmountValid(false);
        return;
      
    }  props.onAddHandler(enteredAmountNum);

  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
      ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please Enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
