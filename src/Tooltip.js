import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
const MuiTooltip=()=>{
    
    return(
        <>
            <Tooltip title="Delete" placement="top"> 
            {/* <Tooltip title="Delete" placement="right"> */}
            {/* <Tooltip title="Delete" placement="left"> */}
            {/* <Tooltip title="Delete" placement="botton"> */}
        
            {/* <Tooltip title="Delete" placement="bottm-end"> */}
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
               
            </Tooltip>
            <Tooltip title="Add" arrow>
                <Button >Arrow</Button>
            </Tooltip>
            <Tooltip title="You don't have permission to do this" followCursor>
                <Box sx={{bgcolor:"text.disabled", color:"background.paper" ,width:100,height:20,p:2}}>
                    Disabled Action
                </Box>
            </Tooltip>
        </>
    )
}
export default MuiTooltip;