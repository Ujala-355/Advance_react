import React,{useState} from "react";
import {Tab,Tabs,AppBar} from "@material-ui/core"

const MyTabs=()=>{
    const [value,setValue]=useState(0)
    const handleTabs=(e,val)=>{
        console.warn(val)
        setValue(val)
        
    }
    return(
        <>
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleTabs}>
                        <Tab label="Item 1"/>
                        <Tab label="Item 2"/>
                        <Tab label="Item 3"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>Item One Details</TabPanel>
                <TabPanel value={value} index={1}>Item Two Details</TabPanel>
                <TabPanel value={value} index={2}>Item three Details</TabPanel>
            </div>
            <img src="https://freepngimg.com/thumb/cartoon/7-2-cartoon-picture.png" width="400px" height="400px"/>
            <h1>Tab, Tabs, AppBar TabPanel</h1>
            
        </>
    )
}
const TabPanel=(props)=>{
    const {children,value,index}=props
    return(
        <>
            {
                value==index &&(
                    <h1>{children}</h1>
                )
            }
        </>
    )
}
export default MyTabs;