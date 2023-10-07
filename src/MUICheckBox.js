import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
const App = () => {
  const [name, setName] = useState([]);
    const getValue=(e)=>{
        let data=name;
        data.push(e.target.value);
        console.log(data)
    }

  return (
    <>
        <h1>CheckBox</h1>
        <Checkbox color="primary" value="Vikas" onChange={(e) => getValue(e)} />
        <Checkbox color="primary" value="Vishal" onChange={(e)=>{getValue(e)}}/>
        <Checkbox color="primary" value="Kumkum" onChange={(e)=>{getValue(e)}}/>
        <Checkbox color="primary" value="Neeraj" indeterminate onChange={(e)=>{getValue(e)}}/>
    
    </>
  );
};

export default App;
