import React,{useState} from "react";
const Modal2=()=>{
    const [isOpen,setIsOpen]=useState(false);
    const openModal=()=>{
        setIsOpen(true);
    }
    const closeModal=()=>{
        setIsOpen(false);
    }
    return(
        <>
            <div>
                <button onClick={openModal}>Open Modal</button>
                {isOpen &&(
                    <div style={{position: 'fixed',
                        zIndex: 999,top:0,
                        left:0,width:"100%",
                        height:"100%",
                        backgroundColor:"rgba(0,0,0,.5)"}}>
                        <div style={{position:"fixed", 
                            top:"50%", 
                            left:"50%", 
                            transform:"translate(-50%, -50%)"}}>
                            <h2>Modal Content</h2>
                            <p>This is some content inside the modal</p>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Modal2;