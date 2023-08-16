import { Container, List } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import ChildItem from "./childItem";

export default function ChildList({child, loadMore}){

  const {count, next, results} = child

  const items = results.map((child) => {
    return <ChildItem key={child.child_id} child={child}/>
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