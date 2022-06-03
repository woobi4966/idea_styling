import classNames from 'classnames';
import { useState } from 'react';
import css from './MainView.module.css';
import MainViewBoard from './MainViewBoard';
import MainViewCardTitle from './MainViewCardTitle';
import Text from './Text';


export default function MainView( props ){

    ////////////////////////////////////
    // 0. props로 card 데이터 받아오기
    ////////////////////////////////////

    const id = props.id;
    const [title, setTitle] = useState(props.title);
    const [html, setHTML] = useState(props.html);
    const [bg, setBg] = useState(props.bg);
    
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
           __html: 'First &middot; Second' };
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
            <MainViewCardTitle title={title} />
        <div
            className={css.dropBoard}

            onClick = {createText}
            onDrop = {drop}
            onDragOver = {dragOver}
        >
        </div>
            <MainViewBoard
                id = "MainView"
                className={classNames(css.board, '.droppable')}
                
                // dangerouslySetInnerHTML={createMarkup()}
                // contentEditable='true' placeholder='type anything'   
            />
        </div>
    );
}