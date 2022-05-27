import css from './Text.module.css';

export default function Text() {
    
    // console.log(this.type);

    return(
        <div 
            className={css.textPlace}
        contentEditable='true' placeholder='type anything'></div>
    );
}