import { useState } from 'react';
import css from './MainView.module.css';

export default function MainView(){
    
    const [cssWidth, setCssWidth] = useState(window.innerWidth);
    const [style, setStyle] = useState('');
    
    

    // window의 크기가 변경되면 실행할 함수
    function resize() {
        // window width에서 양쪽 사이드 바를 제거한 width를 얻는다
        setCssWidth(window.innerWidth - (280*2));
        // 이를 css style를 위한 string으로 변환
        // setStyle("width:"+cssWidth+'px');
    }

    // window의 크기가 변경되면 resize()를 실행하라
    window.onresize = resize;

    return(
        <div id='section' className={css.section} style={{width: cssWidth + 'px'}}>
            <p>{cssWidth}</p>    
        </div>
    );
}