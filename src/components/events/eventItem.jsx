import { IconButton, ListItem, Paper, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';


export default function EventItem({myEvent, displayEdit=false, handleEditClick=null}){

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

      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}} >

      <Stack direction={'row'} alignItems={'center'} spacing={'2%'} sx={{width: '100%'}} >
      {displayEdit &&
        <IconButton onClick={() => handleEditClick(myEvent)}>
              <EditTwoToneIcon color="secondary"/>
          </IconButton>
        }
        <Typography sx={{ color: 'secondary.dark'}}>
          {`${myEvent.title} ${myEvent.location}`}
          </Typography>
        </Stack>
          <IconButton onClick={handleClick}>
              <ArrowRightTwoToneIcon color="secondary"/>
          </IconButton>
      </Stack>

      </Paper>
    </ListItem>

  )
}
