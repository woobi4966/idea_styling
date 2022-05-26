
import css from './ComponentMenu.module.css';
import ExComponent from './ExComponent';
import { useState } from 'react';

function ComponentMenu(){
    const [size,setSize] = useState(200)
    const [flag,setFlag] = useState(true)
    function drop(e){
        const component_id = e.dataTransfer.getData("component_id");
        const component = document.getElementById(component_id);
        
        e.target.appendChild(component); //HTML 뒷 부분에 추가한다.
    }
    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };

    function dragOver(e) {
        e.preventDefault();
    }
    function onClick(){
        if(flag){
            setSize("100%")
            setFlag(false)
        }else{
            setSize(200)
            setFlag(true)
        }
        
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
                <ExComponent id="1" name="5W1H" size ={size} onClick = {onClick} />
            </div>

        </div>
    );

    

  }

  window.addEventListener('DOMContentLoaded', () => {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
  });

  

export default ComponentMenu;