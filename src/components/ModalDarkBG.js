import css from './ModalDarkBG.module.css';
import { useState, useEffect } from 'react';

export default function ModalDarkBG(props) {

    const [csswidth, setWidth] = useState(window.innerWidth);
    const [cssheight, setHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //   setWidth(window.innerWidth);
    //   setHeight(window.innerHeight);
    // }, [window.innerHeight, window.innerWidth])
    
    
    return(
        <div className={css.bg} style={{width: csswidth}} onClick={props.closeModal}></div>
    );
}