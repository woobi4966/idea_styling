import classnames from 'classnames';

import Card from './Card';
import css from './CardMenu.module.css';

function CardMenu(){
    return(
        <div className={classnames(css.section)}>
            {/* <h1>Card Menu</h1> */}
            <div className={css.cards}>
                <Card title="hello"/>
                <Card title="hello"/>
                <Card title="hello"/>
                <Card title="hello"/>
                <Card title="hello"/>
                <Card title="hello"/>
            </div>
        </div>
    );
}

export default CardMenu;