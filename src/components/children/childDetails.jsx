import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CHILD_URL } from "../../infra/urls"
import { Box, Container, Stack } from "@mui/material"

const ChildDetails = () => {

  const {childId} = useParams()
  const [child, setChild] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${CHILD_URL}${childId}`)
      setChild(response.data)
      
    }
    fetchData()
  }, [childId])

  return(
    <>
        {child && 
        <Stack direction={'column'}>
          <p>{`Name: ${child.name}`}</p>
          <br/>
          <p>{`Age: ${child.age}`}</p>
          <br/>
          <p>{`Kindergarten: ${child.kindergarten}`}</p>
          <br/>
          <p>{`School: ${child.school}`}</p>
          <br />
          <p>{`Classroom: ${child.classroom}`}</p>

        </Stack>
    }
    
    </>
  )
}

export default ChildDetails;