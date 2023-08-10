import { Container, List } from "@mui/material";
import EventItem from "./eventItem";
import InfiniteScroll from "react-infinite-scroller";

export default function EventsList({events,loadMore}){

  const {count, next, results} = events

  const items = results.map((event) => {
    return <EventItem key={event.event_id} myEvent={event}/>
  })

  return(
    <Container sx={{overflow: 'auto', height: '600px'}}>
      <List sx={{maxWidth: '100%', padding: 0}}>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={next !== null}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={false}>
                {items}
        </InfiniteScroll>
    </List>
    </Container>
  )

}