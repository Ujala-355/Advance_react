import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const BottomNavigation1=()=>{
    const [value,setValue]=useState(0)
    return(
        <>
            <BottomNavigation 
            sx={{width:"50%" ,position:"absolute", bottom:0}}
            value={value}
            onChange={(event,newValue)=>{
                setValue(newValue)
            }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
                <BottomNavigationAction lable="Favorties" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction lable="Profile" icon={<PersonIcon/>}/>
            </BottomNavigation>
        </>
    )
}
export default BottomNavigation1;