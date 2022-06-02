import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import css from "./TopBar.module.css";
import {
  faMagnifyingGlass,
  faPlusCircle,
  faArrowUpFromBracket,
  faFloppyDisk,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

function TopBar() {
  //  FONTAWESOME ICONS
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  const newIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  const shareIcon = <FontAwesomeIcon icon={faArrowUpFromBracket} />;
  const saveIcon = <FontAwesomeIcon icon={faFloppyDisk} />;
  const settingIcon = <FontAwesomeIcon icon={faGear} />;
  //create codal button
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={css.bar}>
      <div className={css.logo}>
        <p>IDEA STYLING</p>
      </div>

      <div className={css.middle}>
        <div className={css.search}>
          <div className={css.SearchIcon}>{searchIcon}</div>
          <input type="text" placeholder="type word"></input>
        </div>
        <button
          className={classNames(css.btn, css.newBtn)}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <div>{newIcon}</div>
          <div>NEW</div>
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
        <button className={classNames(css.miniBtn, css.shareBtn)}>
          {shareIcon}
        </button>
      </div>

      <div className={css.right}>
        <button className={classNames(css.miniBtn, css.saveBtn)}>
          {saveIcon}
        </button>
        <button className={classNames(css.miniBtn, css.settingBtn)}>
          {settingIcon}
        </button>
      </div>
    </div>
  );
}

export default TopBar;
