import classnames from 'classnames';
import Card from './Card';
import css from './CardMenu.module.css';

function CardMenu(props){

    let newHeight = props.height; // window 사이즈에 따라 height 자동 조절

    return(
        <div className={classnames(css.section)}
        style={{height: newHeight + 'px'}}>
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