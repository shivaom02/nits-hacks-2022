import React from 'react'
import { Button, Paper } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: "#989",
    },
  }
})

const Team = () => {
  return (
    <ThemeProvider theme={theme} >
      <Paper className='teamdiv' sx={{
        width: "100%",
        height:'100vh',
        overflow: 'hidden',
        position: "relative",
        backgroundImage: 'linear-gradient(to bottom, #277fab, #a5c4d4)'
      }} elevation={0}>
          <Paper className='leftside' sx={{
            width: "60vw", 
            height:"90vh", 
            top: "5vh", 
            left: "8vw",             
            zIndex: 999,
            borderRadius: "20px", 
            position: "fixed",
            color: "#eee" }} 
            elevation={12}>
            <Button color='primary' variant='contained'>left</Button>
          </Paper>
          <Paper className='rightside' sx={{
            float: "right",
            marginRight: "7vw",
            width: "30vw", 
            height:"100vh", 
            marginTop: "0", 
            borderRadius: "0",
            background: "#000"
          }} elevation={0}>
              <Button color='primary' variant='contained'>Right</Button>
          </Paper>
      </Paper>
    </ThemeProvider>    
  )
}

export default Team