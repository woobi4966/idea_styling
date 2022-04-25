import { useState } from 'react';
import css from './MainView.module.css';

function MainView(){

    // useState(width, setWidth) = useState(200);

    window.onload=function(){
        let section = document.getElementsByClassName('section');
        let window_width = window.innerWidth;
        console.log(window_width);
        section.style.width = (window_width - 280*2) + 'px';
    }

    return(
        <div className={css.section}></div>
    );
}

export default MainView;