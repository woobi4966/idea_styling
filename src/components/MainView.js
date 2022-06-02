import classNames from "classnames";
import { useEffect, useState } from "react";
// import ReactMarkdown from 'react-markdown';

import css from "./MainView.module.css";

export default function MainView({ dragAndDropChanged }) {
  const [cssWidth, setCssWidth] = useState(window.innerWidth - 280 * 2);

  ////////////////////////////////////
  // 0. window 사이즈 자동 조절
  ////////////////////////////////////

  // window의 크기가 변경되면 실행할 함수
  function resize() {
    // window width에서 양쪽 사이드 바를 제거한 width를 얻는다
    setCssWidth(window.innerWidth - 280 * 2);
    // 이를 css style를 위한 string으로 변환
    // setStyle("width:"+cssWidth+'px');
  }

  // window의 크기가 변경되면 resize()를 실행하라

  // window.onresize = resize;

  useEffect(() => {
    window.onresize = resize;
  }, [window.innerWidth]);

  ////////////////////////////////////
  // 1. board을 클릭하면 글을 쓸 수 있다
  ////////////////////////////////////
  let board = document.getElementsByClassName(css.board);

  function addTextInput() {
    // board.append(<div contenteditable='true' placeholder='type anything'></div>);
  }

  ////////////////////////////////////
  // 2. 컴포넌트를 drag and drop 해서 추가할 수 있다
  ////////////////////////////////////

  function drop(e) {
    const component_id = e.dataTransfer.getData("component_id");
    const component = document.getElementById(component_id);

    e.target.appendChild(component); //HTML 뒷 부분에 추가한다.
  }

  function dragOver(e) {
    e.preventDefault();
  }

  return (
    <div
      id="section"
      className={css.section}
      style={{ width: cssWidth + "px" }}
    >
      <p style={{ color: "#ffffff" }}>{cssWidth}</p>

      <div className={css.title}>
        <p>Welcome</p>
        <p>작성날짜 : 2022. 5. 5.</p>
        <p>만든이 : author</p>
      </div>
      <div
        id="MainView"
        className={classNames(css.board, ".droppable")}
        onClick={addTextInput}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {/* <div contentEditable='true' placeholder='type anything'>
                    </div> */}
      </div>
    </div>
  );
}
