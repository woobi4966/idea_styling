import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import css from './Text.module.css';


export default function Text( props ) {

    const [html, setHtml] = useState(props.html);
    const [tagName, setTagName] = useState(props.tagName);

    function onChangeHandler(e){
        setHtml(e.target.value);
    }

    return(
        <ContentEditable
            className={css.block}
            html={html}
            tagName={tagName}
            onChange={onChangeHandler}
        />
    );
}