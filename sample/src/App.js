
import { useState } from 'react';
import './App.css'
function App() {
  const [toDos,settoDos] = useState([])
  const [toDo,settoDo] = useState('')
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
        <input value={toDo} onChange={(e)=>settoDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settoDos([...toDos,{id:Date.now() ,text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {
        toDos.map((obj)=>{
        return(  
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.value)
              console.log(obj)
              settoDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }}
            value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{
              settoDos(toDos.filter(obj2=>{
                let temp
                if(obj2.id!=obj.id){
                  temp=obj2
                }
                return null
              }))
            }} className="fas fa-times"></i>
          </div>
        </div> )
        })
      }  
      </div>
  </div>
  );
}

export default App;
