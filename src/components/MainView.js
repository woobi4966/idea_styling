import { useEffect, useState } from 'react';
import css from './MainView.module.css';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height} = window;
    return (width);
}

export default function MainView(){

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    // const [rewidth, setreWidth] = useState();

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

        document.getElementById('section').style.width = windowDimensions;
    }, []);


    
    return(
        <div id='section' className={css.section} width={windowDimensions}>
            <p>{windowDimensions}</p>    
        </div>
    );
}