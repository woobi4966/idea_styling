// ExComponent.js
import classNames from 'classnames';
import css from './ExComponent.module.css';

export default function ExComponent(props) {
    const size = props.size

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
            style={{width:size, height:size}}
            onClick = {props.onClick}
            ondoubleClick = {props.ondoubleClick}
        >
            <props onClick={() => window.open('https://coggle.it/', '5W1H')}>__</props>
            <h1>{props.name}</h1>
            {/* <h3>{props.id}</h3> */}
        </div>
    );
}