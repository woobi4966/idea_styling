import 'animate.css';
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import ModalDarkBG from "./ModalDarkBG";
import css from "./ModalInfo.module.css";


export default function ModalCreate(props) {


    // icons
    const xmarkIcon = <FontAwesomeIcon icon={faXmark} />;


    // close function
    function closeModal(){
            // setIsShow(false);
            props.closeModal('createCard');   
    }
    

    return(
        <div className={classnames(css.modalBg, "animate__animated", "animate__fadeIn")} >
            <div className={css.modal}>
                <div className={css.top}>
                    <p>Idea Styling</p>
                    <button className={css.close} onClick={closeModal}>{xmarkIcon}</button>
                </div>
                <p>Create Card</p>
                <p className={css.copyright}>© 2022 Team Laptop</p>
            </div>
            <ModalDarkBG className={css.bg} closeModal={closeModal}/>
        </div>
    );
}