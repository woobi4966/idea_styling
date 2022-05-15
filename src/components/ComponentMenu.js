
import css from './ComponentMenu.module.css';
import ExComponent from './ExComponent';

function ComponentMenu(){

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
            className={css.section}
            
        >
            <h1>Component Menu</h1>
            <div
                className={css.componentList}
                onDrop = {drop}
                onDragOver = {dragOver}
            >
                <ExComponent id="1" name="ExComponent" />
            </div>

        </div>
    );

  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });

export default ComponentMenu;