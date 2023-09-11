import { Container, List } from "@mui/material";
import EventItem from "./eventItem";

const ChildEventsList = ({childEvents, handleEditClick}) => {
  console.log('childEvents', childEvents)

  if (!Array.isArray(childEvents) || childEvents.length === 0 ) {
    return(
      <p>No child events available</p>
    )
  }


  const items = childEvents.map((event) => {
    return <EventItem key={event.event_id} myEvent={event} displayEdit={true} handleEditClick={handleEditClick}/>
    })
 

  return(
    <Container sx={{ overflow: 'auto', height: '600px' }}>
      <List sx={{ maxWidth: '100%', padding: 0 }}>{items}</List>
    </Container>

  )

}

export default ChildEventsList;
