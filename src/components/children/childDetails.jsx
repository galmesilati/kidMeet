import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CHILD_URL } from "../../infra/urls"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Person, Cake, Home, School, Class } from "@mui/icons-material"

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
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
              <Stack spacing={'2%'} alignItems={'center'}>
              <img alt="person" style={{height: 'auto', width: "8em"}}
              src="https://creazilla-store.fra1.digitaloceanspaces.com/silhouettes/78671/user-icon-silhouette-ac61da-original.svg"></img>
              <Typography variant="h4" color='secondary' sx={{fontWeight: 600}}>
                {child.name}
              </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack direction={'column'} >
                <Box display="flex" alignItems="center">
                  <Stack direction={'row'} spacing={'2%'} sx={{width: '100%'}}>
                    <Cake fontSize="large" color="secondary" />
                    <Typography variant="h5" color='secondary'>{`Age: ${child.age}`}</Typography>
                  </Stack>
                </Box>
                <br/>

                <Box display="flex" alignItems="center">
                  <Stack direction={'row'} spacing={'2%'} sx={{width: '100%'}}>
                  <Home fontSize="large" color="secondary"/>
                  <Typography variant="h5" color='secondary'>{`Kindergarten: ${child.kindergarten}`}</Typography>
                  </Stack>
                </Box>
                <br/>

                <Box display="flex" alignItems="center">
                  <Stack direction={'row'} spacing={'2%'} sx={{width: '100%'}}>
                    <School fontSize="large" color="secondary"/>
                    <Typography variant="h5" color='secondary'>{`School: ${child.school}`}</Typography>
                  </Stack>
                </Box>
                <br />
                <Box display="flex" alignItems="center">
                  <Class fontSize="large" color="secondary"/>
                  <Typography variant="h5" color='secondary'>{`Classroom: ${child.classroom}`}</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        }
    
    </>
  )
}

export default ChildDetails;