import React, { useState } from 'react';
import css from './MainViewBoard.module.css';
import Text from './Text';

export default function MainViewBoard( props ) {

    const [blocks, setBlocks] = useState([
        {
            id : 234,
            tag : "p",
            html : "hello"
        },
        {
            id : 235,
            tag : "h1",
            html : "2222"
        },
    ]);

    // random block id generator
    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    
    function updatePage(updatedBlock) {

        let index = blocks.map((block) => block.id).indexOf(updatedBlock.id);
        let updatedBlocks = [...blocks];

        updatedBlocks[index] = {
            ...updatedBlocks[index],
            tag: updatedBlock.tag,
            html: updatedBlock.html
        };
        setBlocks(updatedBlocks);
    }
    
    function addblock(currentBlock) {
        
        let newBlock = { id: uid(), html: "", tag: "p"};
        let index = blocks.map((b) => b.id).indexOf(currentBlock.id);
        let updatedBlocks = [...blocks];
        updatedBlocks.splice(index+1, 0, newBlock);
        // ( {blocks:updatedBlocks}, () => {
        //     currentBlock.ref.nextElementSibling.focus();
        // });
    }

    function deleteBlock(currentBlock){

        let previousBlock = currentBlock.ref.previousElementSibling;
        if(previousBlock){
            let index = blocks.map((block) => block.id).indexOf(currentBlock.id);
            let updatedBlocks = [...blocks];
            updatedBlocks.splice(index, 1);
            setBlocks(updatedBlocks);
            // () => {
                // setCaretToEnd(previousBlock);
            previousBlock.focus();
            }
        }

    function onKeyDownHandler(e) {
        if (e.key === "Enter") {
            // While pressing "Enter" should add a new block to the page, we
            // still want to allow line breaks by pressing "Shift-Enter"
            if (this.state.previousKey !== "Shift" && !this.state.selectMenuIsOpen) {
            e.preventDefault();
            this.props.addBlock({
                id: this.props.id,
                ref: this.contentEditable.current
            });
            }
        }

    return(
        <div className={css.page}>
            {blocks.map( (block, i) => {
                return (
                    <Text
                        key={i}
                        id={block.id}
                        tag={block.tag}
                        html={block.html}
                        updatePage={updatePage}
                        addBlock={addblock}
                        deleteBlock={deleteBlock}
                        onKeyDownHandler={onKeyDownHandler}
                    />
                );
            })}
        </div>
        );
    }
}