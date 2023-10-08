import React, { useState } from "react";
import { Checkbox,Radio,Slider} from "@material-ui/core";
import RangeSlider from "./RangeSlider";
import Select_Opstion from "./Mselect"
import Textfield from "./MTextfield"
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
    const mark=[
        {
            value:0,
            label:"start"
        },
        {
            value:100,
            label:"middle"
        },
        {
            value:100,
            label:"middle"
        }
        ,
        {
            value:200,
            label:"Stop"
        },
        {
            value:55,
            label:"custom"
        }
    ]
    const getValueSlider=(e,val)=>{
        console.log(val)
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
        <div>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QXcSI-MCT0ygb0XQbYsoWxaaZMos5zJ7wg&usqp=CAU"
            alt="Your Image"
            style={{ verticalAlign: 'top', maxHeight: '100%' }}
        />
</div>
        <div>
            <h1>Slider</h1>
            <Slider
                color="secondary"
                style={{width:400, margin:40}}
                defaultValue={100}
                valueLabelDisplay="auto"
                step={10}
                max={200}
                marks={mark}
                onChange={getValueSlider}
                orientation="horizontal"
                // orientation="vertical"
            />
        </div>
        <RangeSlider/>
        <Select_Opstion/>
        <Textfield/>
    </>
  );
};
export default App;
