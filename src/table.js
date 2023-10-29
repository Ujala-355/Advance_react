import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from "@mui/material"
const Data = [
    { Id:1, Name: 'John Smith', Age: 30, Email: 'john.smith@example.com' },
    { Id:2, Name: 'Jane Doe', Age: 25, Email: 'jane.doe@example.com' },
    { Id:3, Name: 'Robert Brown', Age: 35, Email: 'robert.b@example.com' },
    { Id:4, Name: 'Lisa Johnson', Age: 28, Email: 'lisa.j@example.com' },
    { Id:5, Name: 'Michael Lee', Age: 32, Email: 'michael.lee@example.com' },
  ];
const Table1=()=>{
    return(
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((id)=>(
                            <TableRow key={id}>
                                <TableCell>{id.Id}</TableCell>
                                <TableCell>{id.Name}</TableCell>
                                <TableCell>{id.Age}</TableCell>
                                <TableCell>{id.Email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Table1;