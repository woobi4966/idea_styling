import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import css from './ComponentMenu.module.css';
import ExComponent from './ExComponent';

function ComponentMenu( props ){

    let newHeight = props.height; // window 사이즈에 따라 height 자동 조절

    ////////////////////////////////////
    // 1. DRAG AND DROP
    ////////////////////////////////////

    // const [{isOver}, drop] = useDrop(() => ({
    //     accept : "component",
    //     drop: (item) => addComponentToBoard(item.id), 
    //     collect : (monitor) => ({
    //         isOver : monitor.isOver(),
    //     }),
    // }));
    
    // const addComponentToBoard = (id) => {console.log(id)};

    return(
        <div
            className={css.section}
            style={{height: newHeight + 'px'}}
        >
            <DndProvider
                backend={HTML5Backend}
                className={css.componentList}
            >
                <ExComponent id="1" name="ExComponent" />
                <ExComponent id="2" name="ExComponent" />
                <ExComponent id="3" name="ExComponent" />


                <ExComponent id="3" name="droppable" />
                

                {/* <div className={css.dndBoard} ref={drop}></div> */}
            </DndProvider>
        </div>
    );
}

export default ComponentMenu;