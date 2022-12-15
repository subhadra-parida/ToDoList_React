import React,{ useState } from 'react';
import './index.css'
function Todo(){
const [todo,setTodo]=useState("")
const [alltodo,setAllTodo]=useState([])
  return (
    <body>
      <h1 id='header'>TODO LIST</h1>
    <div id='container'>
      <input id='inputbox' type="text" placeholder='Enter Your Task' onChange={(element)=>{
        setTodo(element.target.value)
      }}/>
    <button id='addBtn' onClick={()=>{
      if(todo.length>0){
      setAllTodo([...alltodo,todo])
      }
    }}>Add ToDo </button>
    {
      alltodo.map((item,index)=>{
        return(
          <div>
            <h2 id="item">{item}</h2>
            <button id='deleteBtn' onClick={()=>{
              let allData=[...alltodo]
              allData.splice(index,1); 
              setAllTodo(allData)
            }}>Delete</button>  
            <button id='editBtn' onClick={()=>{
              let newArr=[...alltodo];
              let editvalue = prompt("enter the edited todo")
              newArr[index]=editvalue
              setAllTodo(newArr)
            }}>EDIT</button>
            <button id='completeBtn' onClick={()=>{
              let newArr = [...alltodo];
              newArr[index]=<strike>{newArr[index]}</strike>
              setAllTodo(newArr)    
            }}>Complete</button>
          </div>
        )
      })
    }
    </div>
    </body>
  )
}
export default Todo

