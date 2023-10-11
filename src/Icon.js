import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from "@mui/icons-material/Fingerprint"
const Icon=()=>{
  return(
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
        <Button variant="contained" endIcon={<SendIcon/>}>Send</Button>
      {/* Sizes */}
        <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small"/>
        </IconButton>
        <IconButton aria-lable="delete" size="small">
            <DeleteIcon fontSize="inherit"/>
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon/>
        </IconButton>
        <IconButton  color="primary" aria-label="add to shpp">
            <AddShoppingCartIcon/>
        </IconButton>
        {/* Fingerprint icon */}
        <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint/>
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
            <Fingerprint/>
        </IconButton>

      </Stack>
    </>
  )
}
export default Icon;