import React, {useState} from "react";
import {Button,Grid,Paper,Typography} from "@mui/material";
const TicTacToe=()=>{
    const [board,setBoard]=useState(Array(9).fill(null));
    const [isXNext,setIsXNext]=useState(true);

    const handleClick=(index)=>{
        if (board[index] || calculateWinner(board)){
            return;
        }
        const newBoard=[...board];
        newBoard[index]=isXNext? 'X':'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }
    const renderSquare=(index)=>(
        <Button 
            variant="outlined"
            style={{width:"60px",height:"60px"}}
            onClick={()=>handleClick(index)}
        >
            {board[index]}
        </Button>
    )
    const winner=calculateWinner(board);
    const status=winner?`Winner:${winner}`:`Next player:${isXNext?'X':'O'}`;

    return(
        <>
            <div style={{textAlign:"center", marginTop:"20px"}}>
                <Typography variant="h4" gutterBottom>
                    Tic Tac Toe
                </Typography>
                <Paper elevation={3} style={{padding:"20px",marignTop:'20px',width:"400px",height:"300px",margin:"auto"}}>
                    <Typography variant="h6" gutterBottom>
                        {status}
                    </Typography>
                    <Grid container spacing={1} justifyContent="center">
                        {[0,1,2].map((row)=>(
                            <Grid container item key={row} justifyContent="center">
                                {[0,1,2].map((col)=>(
                                    <Grid item key={col}>
                                        {renderSquare(row*3+col)}
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </div>
        </>
    )
}
const calculateWinner=(squares)=>{
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for (let i=0; i<lines.length; i++){
        const[a,b,c]=lines[i];
        if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}
export default TicTacToe;