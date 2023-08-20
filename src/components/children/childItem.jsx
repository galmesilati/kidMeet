import { IconButton, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function ChildItem({child}){

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/children-page/${child.child_id}`)
  }


  return(
    <ListItem sx={{height: '100px'}}>
      <Paper elevation={3} 
              sx={{width: '100%',  height: 60, 
              textAlign: 'center', 
              display:'flex', flexDirection:'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingX: '2em'}}>
      <Typography sx={{color: "grey"}}>{`${child.child_name}`}</Typography>

        <IconButton onClick={handleClick}>
            {/* <ArrowCircleRightIcon sx={{fill: "#a5ebff"}}/> */}
        </IconButton>

      </Paper>
    </ListItem>

  )
}
