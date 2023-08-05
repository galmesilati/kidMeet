import { Typography } from "@mui/joy"
import { Stack } from "@mui/material"

const HomePage = () => {
  return(
    <>
      <Stack alignItems={"center"} direction={"column"} spacing={"4em"} >
      
      <p style={{width: "40em", "white-space": "normal"}}>
      <Typography 
      level={'h1'}
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#b7e994',
        textDecoration: 'none',
      }}
      >
        KIDate
      </Typography>
      <Typography level="display1" variant="plain" >
        Welcome!
      </Typography >
       <br/>
       Kidate is an innovative application designed to help parents schedule meeting dates
          for their children in a hassle-free way. Say goodbye to the headache of organizing playdates!
          <br />
          Easily Enter Your Child's Weekly Schedule
          <br />
          With Kidate, you can effortlessly enter your child's weekly schedule, indicating the days
          they are available and the days they have prior commitments. We understand that your child's
          time is precious, and Kidate ensures you can make the most of their free days.
          <br />
          Connect with Complementary Schedules
          <br />
          Kidate's smart algorithm uses the schedule information of multiple children to suggest
          potential meeting dates for playdates. Find other parents whose children have complementary
          schedules, making playdate planning a breeze.
          <br />
          Enhance Your Children's Social Experience
          <br />
          We believe in fostering social connections for your children. Kidate brings kids together
          in fun and engaging playdates, promoting friendship and social growth.
          <br />
          Simplify your life and enrich your children's playtime with Kidate. Get started today and
          make playdate planning a joy!
      </p>
      </Stack>
    </>
  )
}

export default HomePage;