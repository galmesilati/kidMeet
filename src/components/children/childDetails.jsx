import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CHILD_SCHEDULE_URL, CHILD_URL, SCHEDULE_URL } from "../../infra/urls"
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material"
import { Person, Cake, Home, School, Class } from "@mui/icons-material"

const ChildDetails = () => {

  const navigate = useNavigate()

  const {childId} = useParams()
  const [child, setChild] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${CHILD_URL}${childId}`)
      setChild(response.data)
      
    }
    fetchData()
  }, [childId])

  const handleClick = () => {
    navigate(`/schedule-page/${childId}`)
  }

  return(
    <>
      {child && 
        <>
          <Container maxWidth="sm" textAlign="center">
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
              <br />

              <Grid item xs={12}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Stack direction={'column'} spacing={2} >
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
                </Paper>

                <Box display="flex" justifyContent="center" mt={2}>
                  <Button onClick={() => handleClick()}>View Schedule</Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </>
      }
    </>
  )
}

export default ChildDetails;