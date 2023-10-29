import {Box,List,ListItem,ListItemIcon,ListItemText,Stack,Chip, Avatar} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import FaceIcon from "@mui/icons-material/Face";
const List1=()=>{
    return(
        <>
            <Box sx={{width:"400px", bgcolor:"efefef"}}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="List itme 1"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="List item 2"/>
                    </ListItem>
                </List>
            </Box>
            <Stack direction="row" spacing={1}>
                <Chip label="Chip" color="primary" icon={<FaceIcon/>} />
                <Chip
                    label="Chip outlined"
                    color="secondary"
                    size="small"
                    variant="outlined"
                    avatar={<Avatar>U</Avatar>}
                />
                <Chip label="Click" color="success" onClick={()=>alert("Hii Ujala")}/>
                <Chip
                    label="Delete"
                    color="error"
                    onClick={()=>alert("Hii neeraj")}
                    onDelete={()=>alert("hello ujala")}
                />
            </Stack>
        </>
    )
}
export default List1;