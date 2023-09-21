import { Stack, Typography } from "@mui/material";
// import {Typography} from '@mui/joy';

const HomePage = () => {
  return(
    <>
      <Stack  width={{xs:"100%", lg:"50%"}} 
      alignItems={"center"} direction={"column"} spacing={"3em"} >
      
      <Typography color="primary"
      noWrap
      component="a"
      href="/"
      sx={{
        "font-size": "70px",
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 600,
        letterSpacing: '1rem',
        textDecoration: 'none',
      }}
      >
        KIDate
      </Typography>

      <Typography variant="body1">
          Welcome!
          <br />
          <br />
          Today, parents of small children are constantly juggling schedules for classes,
          playdates, birthdays, and more. It can be overwhelming and time-consuming.
          <br />
          KIDate is here to rescue! Our innovative app is designed to help parents coordinate
          meeting dates for their children in a hassle-free way.
          <br />
          <br />
          <strong>Effortless Planning</strong>
          <br />
          Easily enter your child's weekly schedule, including classes, extracurricular activities,
          and free time to meet friends. Say goodbye to the headache of coordinating playdates on
          multiple platforms.
          <br />
          <br />
          <strong>Collaborative Calendar</strong>
          <br />
          The Schedule page displays a collaborative calendar where parents can sync and view each
          other's child schedules. It allows you to find the perfect time for your child's playdate
          with friends.
          <br />
          <br />
          <strong>Connecting Kids, One Playdate at a Time</strong>
          <br />
          KIDate fosters meaningful friendships and social growth. Let your child explore fun and
          engaging hangouts with friends, while you enjoy a hassle-free planning experience.
          <br />
          <br />
          <strong>Unlock the Joy of Playdates</strong>
          <br />
          Make the most of your kids' free time by coordinating exciting playdates effortlessly.
          KIDate empowers parents to create lasting memories for their children.
        </Typography>
      </Stack>
    </>
  )
}

export default HomePage;