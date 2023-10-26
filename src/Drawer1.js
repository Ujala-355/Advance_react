import {Drawer,Box,Typography} from "@mui/material";
const Drawer1=()=>{
    return(
        <>
            <Drawer anchor="left">
                <Box p={2} width="250px" textAligb="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Side Panle
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}
export default Drawer1;
// some thing worng