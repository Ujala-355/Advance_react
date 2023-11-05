import React,{useState} from "react";
import {Button} from "@mui/material";

const MyModal=()=>{
    const [isModalOpen,setIsModalOpen]=useState(false)
    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }
    return(
        <>
            <Button onClick={openModal} variant="contained">Open Modal</Button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <Button className="close" onClick={closeModal} variant="contained">&times;</Button>
                        <p>Modal content here</p>
                    </div>
                </div>
            )}
        </>
    )
}
export default MyModal;