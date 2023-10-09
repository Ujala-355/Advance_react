import React from "react";
import {Grid} from "@material-ui/core"
const MyGrid=()=>{
    return(
        <>
            <Grid item container spacing={1}>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Box1</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Box2</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Box3</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Boxx3</h1></Grid>
                

            </Grid>
        </>
    )
}
export default MyGrid;
