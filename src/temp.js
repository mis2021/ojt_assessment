import React,{useState} from "react";

export default function App() {

  const [stateData, setData] = useState([]);

  const [stateInput, setInput] = useState("");
  const sample = "hello";

  const addnew = (event) => {
    console.log(event.target.value); // key event listener print to console
    setInput(event.target.value); // in every key pressed prints data on webpage element "stateInput"
  };
  const addbutton = () => {
    const newName = { name: stateInput }; // gets data sends to stateInput
    const newData = stateData.filter((b, index)=>{
      return b.name == stateInput;
    });
    console.log(newData);
    // setData((prev) => [...prev, newName]); // setting data starts from the previous array object
    if (newData.length == 0) { // making sure no conflicts of new data from older data.
      setData((prev) => [...prev, newName]);
    }
  };
  const delbutton = (a) => {
    console.log(a);
    const newData = stateData.filter((b, index)=>{
      return b.name != a;
    });
    setData([...newData]);
  }

  const updatebutton = (a,b) => {
    console.log(a);
    console.log(b);
    const newData = stateData.filter((c)=> {
      if (c.name == a) {
        c.name = b;
      }
      return c;
    });
    setData([...newData]);
  }

  return (
    <>
      <input  type="text" onChange={addnew} /> 
      <button onClick={addbutton}>Add New!</button>
      
      <br />
      <br />
      {/* {
      stateData

    } */}
      {stateInput}
      <br />
      {/* {data[1].name} */}
      {stateData.map((e) => (
        <>
          {e.name}<button onClick={()=>delbutton(e.name)}>Remove!</button>
          <input  type="text" onBlur={(v)=>{updatebutton(e.name,v.target.value)}} /> 
          <br />
        </>
      ))}
      <hr/>
      {stateData.map((e) => (
        <>
          {e.name}
          <br />
        </>
      ))}
    </>
  );
}

