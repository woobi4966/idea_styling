import { useState } from 'react';
import css from './MainViewCardTItle.module.css';

export default function MainViewCardTitle( props ) {

    const [title, setTitle] = useState(props.title);

    return(
        <div className={css.title}>
        <h1>{title}</h1>
        </div>
    );
}