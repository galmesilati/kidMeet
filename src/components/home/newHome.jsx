import { Stack } from "@mui/material"

const HomePage = () => {

  return(
    <>
    <Stack 
      width={{xs:"100%", lg:"50%"}} 
      alignItems={"center"} direction={"column"} spacing={"3em"} >

    <Typography
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
        color: '#b7e994',
        textDecoration: 'none',
      }}
      >
        KIDate
      </Typography>
      

    </Stack>


    
    </>

  )
}