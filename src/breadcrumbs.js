import {Breadcrumbs,Link} from '@mui/material';
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
const handleClick=(event)=>{
    event.preventDefault();
    console.log("You clicked a breadcrumb. ")
}
const BasicBreadcrumbs=()=>{
    return(
        <>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb" maxItems={1}  separator={<NavigateNextIcon fontSize="small"/>}>
                    <Link underline='hover' color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        about
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        W3School
                    </Link>
                </Breadcrumbs>
            </div>
        </>
    )
}
export default BasicBreadcrumbs;