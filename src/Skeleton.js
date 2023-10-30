import {Box,Stack,Skeleton} from "@mui/material"
const Skeleton1=()=>{
    return(
        <>
            <Stack spacing={1} width="250px">
                <Skeleton variant="text"/>
                <Skeleton variant="circular" width={40} height={40}/>
                <Skeleton variant="rectangular" width={250} height={125}/>
            </Stack>
            <Box sx={{width:300}}>
                <Skeleton/>
                <Skeleton animation="wave"/>
                <Skeleton animation={false}/>
            </Box>
            <Skeleton
                sx={{bgcolor:"grey.900"}}
                variant="rectangular"
                width={210}
                height={118}
            />
        </>
    )
}
export default Skeleton1;