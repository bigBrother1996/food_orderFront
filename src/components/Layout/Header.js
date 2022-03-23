import React, { Fragment } from "react";
import meals from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import ButtonCart from "../UI/ButtonCart";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <ButtonCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="food preparing" />
      </div>
    </Fragment>
  );
};

export default Header;
