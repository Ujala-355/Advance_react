import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Avatar1=()=>{
    return(
        <>
            <Stack direction="row" spacing={3}>
                <Avatar src="https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg"/>
                <Avatar src="https://i.pinimg.com/550x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg"/>
                <Avatar sx={{ width: 80, height:80}} src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMteC5qcGc.jpg"/>
            </Stack>
            <Stack direction="row" spacing={3}>
                <Avatar sx={{ backgroundColor: 'blue', color: 'white' }}>N</Avatar>
                <Avatar sx={{ backgroundColor: 'green', color: 'white'}}>A</Avatar>
                <Avatar sx={{ backgroundColor: 'red', color: 'white'}}>V</Avatar>
                <Avatar sx={{ backgroundColor: 'black', color: 'white'}}>G</Avatar>
                <Avatar sx={{ backgroundColor: 'pink', color: 'white'}}>U</Avatar>
                <Avatar sx={{ backgroundColor: 'yellow', color: 'white'}}>R</Avatar>
                <Avatar sx={{ backgroundColor: 'white', color: 'black'}}>U</Avatar>
                <Avatar sx={{ backgroundColor: 'white', color: 'black'}}>K</Avatar>
                <Avatar>U</Avatar>
                <Avatar>L</Avatar>
                
            </Stack>
        </>
    )
}
export default Avatar1;