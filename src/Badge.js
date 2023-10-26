import React,{useState} from "react";
import ButtonGroup from "@mui/material/ButtonGroup"
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack"
const Badge1=()=>{
    const [count,setCount]=useState(1);
    const [invisible,setInvisible]=useState(false);
    const handle=()=>{
        setInvisible(!invisible)
    }
    return(
        <>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action"/>
            </Badge>
            <Badge badgeContent={6}>
                <MailIcon color="pink"/>
            </Badge>
            <Box
            sx={{color:"action.active", display:"flex", flexDirection:"column",'&>*':{marginBottom:2,},"&.MuiBadge-root":{marginRight:4,}}}>
                <div>
                    <Badge color="secondary" badgeContent={count}>
                        <MailIcon/>
                    </Badge>
                    <ButtonGroup>
                        <Button
                        aria-lable="reduce" 
                        onClick={()=>{
                            setCount(Math.max(count-1,0));
                        }}
                        >
                            <RemoveIcon fontSize="small"/>   
                        </Button>
                        <Button
                        aria-label="increase"
                        onClick={()=>{
                            setCount(count+1);
                        }}
                        >
                            <AddIcon fontSize="small"/>
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Badge color="secondary" variant="dot" invisible={invisible}>
                        <MailIcon/>
                    </Badge>
                    <FormControlLabel
                    sx={{color:'text.primary'}}
                    control={<Switch checked={!invisible} onChange={handle}/>}
                    />
                </div>
            </Box>
            <Stack spacing={4} direction="row" sx={{color:"action.active"}}>
                <Badge color="secondary" badgeContent={0}>
                    <MailIcon/>
                </Badge>
                <Badge color="secondary" badgeContent={0} showZero>
                    <MailIcon/>
                </Badge>
            </Stack>
            <Stack spacing={4} direction="row" sx={{color:"action.active"}}>
                <Badge color="secondary" badgeContent={50}>
                    <MailIcon/>
                </Badge>
                <Badge color="secondary" badgeContent={100}>
                    <MailIcon/>
                </Badge>
                <Badge color="secondary" badgeContent={1000} max={999}>
                    <MailIcon/>
                </Badge>
            </Stack>
        </>
    )
}
export default Badge1;
