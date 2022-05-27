import css from './ComponentMenu.module.css';
import ExComponent from './ExComponent';
import Text from './Text';

function ComponentMenu( props ){

    let newHeight = props.height; // window 사이즈에 따라 height 자동 조절

    ////////////////////////////////////
    // 1. DRAG AND DROP
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
            className={css.section}
            style={{height: newHeight + 'px'}}
        >
            <h1>Component Menu</h1>
            <div
                className={css.componentList}
                onDrop = {drop}
                onDragOver = {dragOver}
            >
                <ExComponent id="1" name="ExComponent" />
                <Text/>
            </div>
        </div>
    );
}

export default ComponentMenu;