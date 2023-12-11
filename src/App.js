import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setToDos([...toDos,{key:Date.now,text:toDo,status:false}])
        }} className="fas fa-plus"></i>
      </div>
      {
        toDos.map((obj)=>{

          return(

        <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);

              setToDos(toDos.filter((obj2)=>{

                if(obj2.key==obj.key)
                {
                  obj2.status=e.target.checked
                }

                return obj2

              }))
              

            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
          )
        }
        )

        
      }

      {
         toDos.map((obj3)=>{
          if(obj3.status)
          {
           return (  <div className='contents'>
           <h1> {obj3.text}</h1>
            </div>)
          }
          return null
       })
      }
    
    

       
      
    </div>
  );

  



}
export default App;