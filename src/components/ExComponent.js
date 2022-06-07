// ExComponent.js
import { useDrag } from 'react-dnd';
import css from './ExComponent.module.css';

export default function ExComponent({id, name}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type : "component",
        item : {id : id},
        collect : (monitor) => ({
            isDragging : !!monitor.isDragging(),
        }),
    }));

    const style = {width:"300px", height:"50px"}

    return(
        <div
            ref={drag}
            id={id}
            className={css.board}
            style={style}
            
        >
            {id} : {name}
        </div>
    );
}