import React from 'react';

const ToDoList=(props) =>{
    return (
        <>
           <li onClick={()=>{props.onSelect(props.id)}}> (-) {props.text}</li>
        </>
    );
}

export default ToDoList;