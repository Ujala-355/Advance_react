import {Box,SpeedDial,SpeedDialIcon,SpeedDialAction,} from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const action =[
    {icon:<FileCopyIcon/>,name:"Copy"},
    {icon:<SaveIcon/>,name:"Save"},
    {icon:<PrintIcon/>,name:"Print"},
    {icon:<ShareIcon/>,name:"Share"},
];
const MuiSpeed=()=>{
    return(
        <>
            <img width="500px"src="https://i.ytimg.com/vi/bVOHeROLNyQ/maxresdefault.jpg"/>
            <Box sx={{height:200,transform:"translateZ(0px)",flexGrow:1}}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{position:"absolute",bottom:16,left:16}}
                    icon={<SpeedDialIcon/>}
                >
                    {action.map((action)=>(
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </>
    )
}
export default MuiSpeed