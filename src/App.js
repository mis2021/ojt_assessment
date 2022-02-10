import React,{useState} from "react";

export default function App() {

  // const [stateData, setData] = useState([]);

  // const [stateInput, setInput] = useState(null);
  // const sample = "hello";

  // const addnew = (event) => {
  //   console.log(event.target.value); // key event listener print to console
  //   setInput(event.target.value); // in every key pressed prints data on webpage element "stateInput"
  // };
  // const addbutton = () => {
  //   const newName = { name: stateInput }; // gets data sends to stateInput
  //   const newData = stateData.filter((b, index)=>{
  //     return b.name == stateInput;
  //   });
  //   console.log(newData);
  //   // setData((prev) => [...prev, newName]); // setting data starts from the previous array object
  //   if (newData.length == 0) { // making sure no conflicts of new data from older data.
  //     setData((prev) => [...prev, newName]);
  //   }
  // };
  // const delbutton = (a) => {
  //   console.log(a);
  //   const newData = stateData.filter((b, index)=>{
  //     return b.name != a;
  //   });
  //   setData([...newData]);
  // }

  // const completeBtn = (a ,b) => {
  //   console.log(a);
  //   const newData = stateData.filter((c)=> {
  //     if (c.name = a) {
  //       c.name = b;
  //     }
  //     return c;
  //   });
  //   setData([...newData]);
  // }

  // const myStyle = {color:'gray',fontFamily:'sans-serif'};

  // return (
  //   <>
  //     <input type="text" onChange={addnew} /> 
  //     <button onClick={addbutton}>Add Task!</button>
      
  //     <br />
  //     <br />
  //     {/* {
  //     stateData
  //   } */}
  //     {stateInput}
  //     <br />
  //     {/* {data[1].name} */}
  //     {stateData.map((e) => (
  //       <>
  //         <span style={myStyle}>{e.name}</span>
  //         <button onClick={()=>delbutton(e.name)}>Remove!</button>
  //         <button onClick={()=>completeBtn(e.name)}>Complete</button>
  //         {/* <input  type="text" onBlur={(v)=>{updatebutton(e.name,v.target.value)}} />  */}
  //         <br />
  //       </>
  //     ))}
      
  //   </>
  // );

  const [list,setList] = useState([]);
  const [filter,setFilter] = useState('ALL');
  const [todos,setTodos] = useState([]);

  const delTodo = (i) => {
    let theList = {...list}
    theList.splice(i,1)

  }

  const addTodo = (event) => {
    console.log(event.target.value);
    setList.taskName(event.target.value);
  }

  const completeItem = (i) => {
    let theList = {...list}
    theList[i] = {
      ...theList[i],
      isDone:!theList[i]?.isDone
    }
    setTodos(theList)
  }

  return (
    <center>
    <div className="todoapp stack-large">
      <h1>Todo List by Mejares</h1>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg" >Add to List!</button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">ALL</button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">FINISHED</button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">UNFINISHED</button>
      </div>
        {/* all elements shown depends on the selected filter.. */}
    </div>
    </center>
  );
}

