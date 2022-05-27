import classnames from 'classnames';
import { useState, useEffect } from 'react';
import Card from './Card';
import css from './CardMenu.module.css';

function CardMenu(props){

    let newHeight = props.height; // window 사이즈에 따라 height 자동 조절

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/cards")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setCards(data);
        })
    }, []);


    return(
        <div className={classnames(css.section)}
        style={{height: newHeight + 'px'}}>
            {/* <h1>Card Menu</h1> */}
            <div className={css.cards}>
                {cards.map(card => (
                    <Card key={card.id} img={card.img} title={card.mainView}/>
                    ))}
            </div>
        </div>
    );
}

export default CardMenu;