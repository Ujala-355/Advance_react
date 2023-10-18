import TextField from  "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography"
const people= [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
]
const ComBox=()=>{
    return(
        <>
            <Typography color="secondary">Autocomplete is a normal text input enhanced by a panel of suggested options</Typography>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={people}
                sx={{width:300, justifyContent:"center"}}
                renderInput={(params)=><TextField {...params} label="Movie"/>}
            />
        </>
    )
}
export default ComBox;
