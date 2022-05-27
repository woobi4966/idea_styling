import React from "react";
import css from "./Card.module.css";

export default function Card(props){



    function createMarkup() {
        let img = props.img;
        let title = props.title;
        return {
           __html:  `<img src=${img} alt="image" />
           <div className=${css.titleBox}>
               <h3>${title}</h3>
           </div>`};
    };

    return(
        <div className={css.body}
            dangerouslySetInnerHTML={createMarkup()}
        >
            
            
        </div>
    );
}