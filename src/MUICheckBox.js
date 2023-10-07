import React, { useState } from "react";
import { Checkbox,Radio,Slider} from "@material-ui/core";
const App = () => {
  const [name, setName] = useState([]);
  const [gender,setGender]=useState("Girl")
    const getValue=(e)=>{
        let data=name;
        data.push(e.target.value);
        setName(data)
        console.log(data)
    }
    const testing=(e)=>{
        console.log(e.target.value);
        setGender(e.target.value)
    }

  return (
    <>
        <h1>CheckBox</h1>
        <Checkbox color="primary" value="Vikas" onChange={(e) => getValue(e)} />
        <Checkbox color="primary" value="Vishal" onChange={(e)=>{getValue(e)}}/>
        <Checkbox color="primary" value="Kumkum" onChange={(e)=>{getValue(e)}}/>
        <Checkbox color="primary" value="Neeraj" indeterminate onChange={(e)=>{getValue(e)}}/>
        <Radio 
        color="primary" 
        value="Girl" 
        onChange={(e)=>testing(e)}
        checked={gender==="Girl"}
        />
        <span>Girl</span>
        <Radio 
        color="primary" 
        value="Boy" 
        onChange={(e)=>testing(e)}
        checked={gender==="Boy"}
        />
        <span>Boy</span>
        <Radio
            color="primary"
            value="other"
            onChange={(e)=>testing(e)}
            checked={gender==="other"}
        />
        <span>Other</span>

        <h1>Slider</h1>
        <Slider
            color="secondary"
            style={{width:900}}
        />
    </>
  );
};
export default App;
