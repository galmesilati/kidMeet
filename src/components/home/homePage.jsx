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
      <Typography variant="body1">
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
      </p>
      </Stack>
    </>
  )
}

export default HomePage;