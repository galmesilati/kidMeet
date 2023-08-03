import { List } from "@mui/material";
import EventItem from "./eventItem";
import InfiniteScroll from "react-infinite-scroller";

export default function EventsList({events,loadMore}){

  const {count, next, results} = events

  console.log('events', events)

  const items = results.map((event) => {
    return <EventItem key={event.id} myEvent={event}/>
  })

  return(
      <List>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={next !== null}
            loader={<div className="loader" key={0}>Loading ...</div>}>
                {items}
        </InfiniteScroll>
    </List>
  )

}