import {Stack,Alert,AlertTitle} from "@mui/material";
const Alert1=()=>{
    return(
        <>
            <Stack spacing={2}>
                <Alert severity="error">This is error alert</Alert>
                <Alert severity="warning">This is warning alert</Alert>
                <Alert severity="info">This is info alert</Alert>
                <Alert severity="success">This is success alert</Alert>

                <Alert variant="outlined" severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is error alert
                </Alert>
                <Alert variant="outlined" severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is warning alert
                </Alert>
                <Alert variant="outlined" severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is info alert
                </Alert>
                <Alert variant="outlined" severity="success">
                    <AlertTitle>success</AlertTitle>
                    This is success alert
                </Alert>

                <Alert variant="filled" severity="error">This is error alert</Alert>
                <Alert variant="filled" severity="warning">This is warning alert</Alert>
                <Alert variant="filled" severity="info">This is info alert</Alert>
                <Alert variant="filled" severity="success">This is success alert</Alert>
                
            </Stack>
        </>
    )
}
export default Alert1