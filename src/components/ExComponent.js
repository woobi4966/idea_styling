// ExComponent.js
import classNames from 'classnames';
import css from './ExComponent.module.css';

export default function ExComponent(props) {

    function dragStart(e) {
        const target = e.target;
        e.dataTransfer.setData('component_id', target.id);
    }

    function dragOver(e) {
        e.stopPropagation();
    }

    return(
        <div
            id={props.id}
            className={css.board}    
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            <h1>{props.name}</h1>
            {/* <h3>{props.id}</h3> */}
        </div>
    );
}