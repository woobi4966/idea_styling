import 'animate.css';
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faXmark } from "@fortawesome/free-solid-svg-icons";

import ModalDarkBG from "./ModalDarkBG";
import css from "./ModalInfo.module.css";



export default function ModalInfo(props) {

    const xmarkIcon = <FontAwesomeIcon icon={faXmark} />;
    const faArrowRightFromBracketIcon = <FontAwesomeIcon icon={faArrowRightFromBracket} />;

    function closeModal(){
            props.closeModal('info');
        
    }

    return(
        <div className={classnames(css.modalBg, "animate__animated", "animate__fadeIn")} >
            <div className={css.modal}>
                <div className={css.top}>
                    <p>Idea Styling</p>
                    <button className={css.close} onClick={closeModal}>{xmarkIcon}</button>
                </div>
                <div>
                    <a href="/privacypolicy">
                        <div className={css.policy}>
                            <p>{faArrowRightFromBracketIcon}</p>
                            <p>개인정보 처리방침</p>
                        </div>
                    </a>
                </div>
                <p className={css.copyright}>© 2022 Team Laptop</p>
            </div>
            <ModalDarkBG className={css.bg} closeModal={closeModal}/>
        </div>
        
    );
}