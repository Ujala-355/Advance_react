import React,{useState} from "react";
import MyModal1 from "./modal1";

const Modal1App=()=>{
    const [openModal,setOpenModal]=useState(false);
    return(
        <>
            <div className="App">
                <button onClick={()=>{setOpenModal(true)}}>Open</button>
                {openModal && <MyModal1 closeModal={()=>setOpenModal(false)}/>}
            </div>
        </>
    )
}
export default Modal1App;