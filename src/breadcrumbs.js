import {Breadcrumbs,Link} from '@mui/material';
const handleClick=(event)=>{
    event.preventDefault();
    console.log("You clicked a breadcrumb. ")
}
const BasicBreadcrumbs=()=>{
    return(
        <>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
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