import React from "react";
import Logo from '../../assets/images/burger.png';
import classes from "./Logo.module.css";


const logo =(props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={Logo} alt="Burger"/>
    </div>
);

export default logo;