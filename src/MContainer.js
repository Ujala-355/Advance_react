import React from "react";
import {Container} from "@material-ui/core";
const MyContainer=()=>{
    return(
        <>
            <Container maxWith="xs" style={{backgroundColor:"skyblue"}}>
                <h1>Max Width xs(extra small)</h1>
            </Container>
            <Container maxWidth="sm" style={{backgroundColor:"black",color:"white"}}>
                <h1>Max width sm(small)</h1>
            </Container>
            <Container maxWidth="md" style={{backgroundColor:"pink"}}>
                <h1>Max width md(medium)</h1>
            </Container>
            <Container maxWidth="lg" style={{backgroundColor:"red"}}>
                <h1>Max width lg(Large)</h1>
            </Container>

        </>
    )
}
export default MyContainer;