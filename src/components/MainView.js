import { text } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import { useState } from 'react';
import css from './MainView.module.css';
import Text from './Text';


export default function MainView( props ){
    
    let newWidth = props.width;
    let newHeight = props.height;
    
    ////////////////////////////////////
    // 1. board을 클릭하면 글을 쓸 수 있다
    ////////////////////////////////////
    
    const [components, setComponents] = useState([]);


    function createText(){
        
        // if(components[components.length -1] === Text) {

        // }
        // else {
            setComponents(...components, [<Text/>]);
        // }   
    }

    // function changedHTML(e) {
    //     setBoardHTML(e.target.value);
    // }

    function createMarkup() {
        return {
           __html: 'First &middot; Second'    };
     }; 

    // let text = `<img src="././public.mainView.jpg">`;
    

    ////////////////////////////////////
    // 2. 컴포넌트를 drag and drop 해서 추가할 수 있다
    ////////////////////////////////////

    function drop(e){
        const component_id = e.dataTransfer.getData("component_id");
        const component = document.getElementById(component_id);
        
        e.target.appendChild(component); //HTML 뒷 부분에 추가한다.
    }

    function dragOver(e) {
        e.preventDefault();
    }

    return(
        <div
            id='section'
            className={css.section}
            style={{width: newWidth + 'px', height: newHeight + 'px'}}
        >
            <div className={css.title}>
                <p>Welcome</p>
                <p>작성날짜 : 2022. 5. 5.</p>
                <p>만든이 : author</p>
            </div>
            {/* drag and drop without api */}
            <div
                id = "MainView"
                className={classNames(css.board, '.droppable')}
                
                onClick={createText}
                onDrop = {drop}
                onDragOver = {dragOver}
                
                dangerouslySetInnerHTML={createMarkup()}
                // contentEditable='true' placeholder='type anything'
                
            >
            </div>
        </div>
    );
}