import React,{useState} from 'react';
import ToDoList from './ToDoList'

const Help=(props)=> {
const [inputValue,setInputValue] = useState()


const [inputItem,setInputItem] = useState([])

const inputItemEvent=(e)=>{
    setInputValue(e.target.value)
}

const addItem=(e)=>{
    setInputItem((oldvalue)=>
     {return[...oldvalue,inputValue]
    })
    setInputValue("")
}

const deleteItem=(id)=>{
 setInputItem((oldvalue)=>{
    return oldvalue.filter((arrEle,i)=>{
        return i!==id;
    })

 })
}

    return (
        <div className="about">
            <div className="w3_agileits_contact_grids">
			<div className="col-md-6 w3_agileits_contact_grid_left"></div>

                <input type="text" placeholder="Add Iteam" value={inputValue} onChange={inputItemEvent}/>
                <button onClick={addItem}>+</button>

                    {
                        inputItem.map((item,i)=>{
                        return <ToDoList key={i} id={i} text={item} onSelect={deleteItem}/>
                        }
                        
                        ) 
                    }

            </div>
            
        </div>
    );
}

export default Help;