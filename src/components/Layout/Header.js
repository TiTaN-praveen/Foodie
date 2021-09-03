import React, { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Foodie</h2>
        <HeaderCartButton onShows={props.onShow}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="A table full of Tastes" />
      </div>
    </Fragment>
  );
};

export default Header;
