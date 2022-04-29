import React from "react";
import css from "./Card.module.css";

export default function Card(props){

    return(
        <div className={css.body}>
            <img src={props.img} alt="image Position"/>
            <div className={css.titleBox}>
                <h3>{props.title}</h3>
            </div>
            
        </div>
    );

}