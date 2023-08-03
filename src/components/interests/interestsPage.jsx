import { useEffect } from "react";
import axios from "axios";
import * as urls from "../../infra/urls"


const InterestPage = () => {

  useEffect(
    () => {
        const fetchData = async () => {
            try {
                const response = await axios.get(urls.KIDMEET_LIST_URL)
                console.log(response)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }
    ,[]
)


  return(
    <h2>Interest page</h2>
  )
}

export default InterestPage;