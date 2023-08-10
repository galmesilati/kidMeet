import { IconButton, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function EventItem({myEvent}){

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/events-page/${myEvent.event_id}`)
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
      <Typography sx={{color: "grey"}}>{`${myEvent.title} ${myEvent.location}`}</Typography>

        <IconButton>
            <ArrowCircleRightIcon onClick={handleClick} sx={{fill: "#a5ebff"}}/>
        </IconButton>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemText primary={`${myEvent.title} ${myEvent.location}`}/>
      </ListItemButton> */}
      </Paper>
    </ListItem>

  )
}
