import CardMenu from '../components/CardMenu';
import MainView from '../components/MainView';
import TopBar from '../components/TopBar';
import ComponentMenu from '../components/ComponentMenu';

import css from './Main.module.css';
import { useEffect, useState } from 'react';
import ModalInfo from '../components/ModalInfo';
import ModalCreate from '../components/ModalCreate';
import useFetch from '../hooks/useFetch';


function Main(){

    // card 데이터들을 가져옴

    // let dbCards = useFetch("http://localhost:3001/cards");

    const [cards, setCards] = useState([]);


    ////////////////////////////////////////////////////////
    // 0. window.resize 되면 적절한 width, height 값을 얻어냄
    ////////////////////////////////////////////////////////
    // 참조 : https://db2dev.tistory.com/entry/React-resize-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%8B%A4%EB%A3%A8%EA%B8%B0

    const [windowSize, setWidnowSize] = useState(
        {
            width : window.innerWidth,
            height : window.innerHeight,
        }
    );
    function handleResize() {
        setWidnowSize({
            width : window.innerWidth - 280*2,
            height : window.innerHeight - 60,
        });
        console.log(windowSize.width);
    }

    window.addEventListener('resize',  handleResize);

    useEffect(() => {
        window.addEventListener('resize',  handleResize);
        return() => { // 추가된 listener 청소 : 최적화
            window.removeEventListener('resize', handleResize);   
        }
    });
    

    ////////////////////////////
    // modalInfo 부분
    ////////////////////////////

    const [isInfoModal, setInfoModal] = useState(false);
    const [isCreateModal, setIsCreateModal] = useState(false);

    function showModal(type){
        if(type === 'info'){
            setInfoModal(true);
        }
        else if(type === 'createCard'){
            setIsCreateModal(true);
        }
    }

    function closeModal(type){
        if(type === 'info'){
            setInfoModal(false);
        }
        else if(type === 'createCard'){
            setIsCreateModal(false);
        }
    }

    return(
        <div className={css.view}>
            {isInfoModal ? <ModalInfo closeModal={closeModal}/> : null}
            {isCreateModal ? <ModalCreate closeModal={closeModal}/> : null}
            <TopBar showModal={showModal}  closeModal={closeModal}/>
            <CardMenu height={windowSize.height} cards={cards} />
            <MainView width={windowSize.width} height={windowSize.height} />
            <ComponentMenu height={windowSize.height} />
        </div>
    );
}

export default Main;