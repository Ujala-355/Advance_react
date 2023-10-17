import React,{createContext} from "react"
import B from "./contextB"
const Name=createContext()
const A=()=>{
    return(
        <>
            <h1>A component</h1>
            <Name.Provider value="Ujala">
                <B/>
            </Name.Provider>
        </>
    )
}
export default A;
export {Name}
