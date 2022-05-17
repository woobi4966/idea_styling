import classNames from 'classnames';
import css from './MainView.module.css';

export default function MainView( props ){
    
    let newWidth = props.width;
    let newHeight = props.height;
    
    ////////////////////////////////////
    // 1. board을 클릭하면 글을 쓸 수 있다
    ////////////////////////////////////
    // let board = document.getElementsByClassName(css.board);

    // function addTextInput() {
    //     // board.append(<div contenteditable='true' placeholder='type anything'></div>);
    // }


    ////////////////////////////////////
    // 2. 컴포넌트를 drag and drop 해서 추가할 수 있다
    ////////////////////////////////////

    function drop(e){
        const component_id = e.dataTransfer.getData("component_id");
        const component = document.getElementById(component_id);
        
        e.target.appendChild(component); //HTML 뒷 부분에 추가한다.
    }

    function dragOver(e) {
        e.preventDefault();
    }

    return(
        <div
            id='section'
            className={css.section}
            style={{width: newWidth + 'px', height: newHeight + 'px'}}
        >
            

            <div className={css.title}>
                <p>Welcome</p>
                <p>작성날짜 : 2022. 5. 5.</p>
                <p>만든이 : author</p>
            </div>
            <div
                id = "MainView"
                className={classNames(css.board, '.droppable')}
                // onClick={addTextInput}

                onDrop = {drop}
                onDragOver = {dragOver}

            >
                    {/* <div contentEditable='true' placeholder='type anything'>
                    </div> */}
                    
            </div>
        </div>
    );
}