import {Stack,Skeleton} from "@mui/material"
const Skeleton1=()=>{
    return(
        <>
            <Stack spacing={1} width="250px">
                <Skeleton variant="text"/>
                <Skeleton variant="circular" width={40} height={40}/>
                <Skeleton variant="rectangular" width={250} height={125}/>
            </Stack>
        </>
    )
}
export default Skeleton1;