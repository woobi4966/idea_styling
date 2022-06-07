import classNames from 'classnames';
import { useState } from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import css from './MainView.module.css';
import MainViewBoard from './MainViewBoard';
import MainViewCardTitle from './MainViewCardTitle';
import Text from './Text';

    ////////////////////////////////////
    // 2. 컴포넌트를 drag and drop 해서 추가할 수 있다
    // component DnD System
    

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

    // const [{isOver}, drop] = useDrop(() => ({
    //     accept : "component",
    //     drop: (item) => addComponentToBoard(item.id), 
    //     collect : (monitor) => ({
    //         isOver : !!monitor.isOver(),
    //     }),
    // }));
    
    // const addComponentToBoard = (id) => {console.log(id)};

    return(
        <div
            id='section'
            className={css.section}
            style={{width: newWidth + 'px', height: newHeight + 'px'}}
        >
            <div className={css.row1}>
                <MainViewCardTitle title={title} />
            </div>
            
            <div className={css.row2}>
                <DndProvider backend={HTML5Backend}>
                    <MainViewBoard />
                </DndProvider>
            </div>
        </div>
    );
}