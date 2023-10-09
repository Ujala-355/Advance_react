import React from "react";
import {Grid,Hidden} from "@material-ui/core"
const MyGrid=()=>{
    return(
        <>
            <Grid item container spacing={1}>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Box1</h1></Grid>
                <Hidden only={["sm","xs"]}><h1 style={{backgroundColor:"blue"}}>Box 2</h1></Hidden>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Box3</h1></Grid>
                <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:"blue"}}>Box4</h1></Grid>
            </Grid>
        </>
    )
}
export default MyGrid;
