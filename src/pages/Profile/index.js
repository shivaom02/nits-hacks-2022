import React from 'react'
import { Paper, Typography, Grid, Link, Avatar, IconButton, Box } from "@mui/material"
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from "@mui/material"

import Navbar from '../../components/Navbar'

import ProfilePic from '../../images/profilepic.svg'
import Health1 from '../../images/health1.svg'
import Health2 from '../../images/health2.svg'
import Health3 from '../../images/health3.svg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const theme = createTheme({
    palette: {
        
    }
  })

const Profile = () => {
  return (
    <ThemeProvider theme={theme} >
        <Navbar />
        <Paper elevation={0} sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "#f9f9f9"
                
            }}>
                {/* upper part */}
            <Paper elevation={10} className='home1' sx={{
                height: "70vh",
                width: "90vw",
                margin: "0 auto",
                marginTop: "3vh",
                position: "relative",
                backgroundColor: "black",
                
            }}>
                <Grid container spacing={2}>
                    {/* left of upper */}
                    <Grid elevation={8} item xs={12} md={4} sx={{height: "70vh", boxShadow: "none", backgroundColor: "#f9f9f9"}}>
                        <Item sx={{boxShadow: "none", backgroundColor: "#f9f9f9"}}>
                       
                       {/* pcture name part */}
                            <Grid container spacing={0}>
                                <Grid item sm={12} md={4} >
                                    <Item elevation={8} sx={{ background: "transparent", boxShadow: "none" }}>
                                    <IconButton sx={{ p: 1, display: "inline-block" }}>
                                        <Avatar alt="S" sx={{ backgroundColor: "#AFC13C", width: "6vw", height: "6vw" }} src={ProfilePic} />
                                    </IconButton>
                                    </Item>
                                </Grid>
                                <Grid item sm={12} md={8}>
                                    <Item elevation={0} sx={{ background: "transparent", boxShadow: "none" }}>
                                    <Box sx={{textAlign: "left"}}>
                                        <Typography sx={{fontSize: "1.1rem", fontWeight: "500"}}>Ted <span style={{ color: "#3CC151", marginBottom: "1.5rem" }}>Bundy</span></Typography>
                                        <Typography>
                                        Computer Science and Engineering <br />
                                        1912099 <br />
                                        Hostel 7
                                        </Typography>
                                        <Typography sx={{fontSize: "1.1rem", fontWeight: "500"}}>
                                        Rank: <span style={{ color: "#A6B92D", marginTop: "2rem" }}>12</span>
                                        </Typography>
                                    </Box>
                                    </Item>
                                </Grid>
                            </Grid>
<br />
                            <Grid container spacing={1} xs={{mt: 3, display: "block"}}>
                                <Grid item xs={12} lg={4}>
                                    <Item elevation={8} sx={{ background: "transparent", boxShadow: "none" }}>
                                    <IconButton sx={{ p: 1, display: "inline-block" }}>
                                        <Avatar alt="S" sx={{ width: "7vw", height: "7vw" }} src={Health1} />
                                    </IconButton>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <Item elevation={8} sx={{ background: "transparent", boxShadow: "none" }}>
                                    <IconButton sx={{ p: 1, display: "inline-block" }}>
                                        <Avatar alt="S" sx={{ width: "5.8vw", height: "5.8vw" }} src={Health2} />
                                    </IconButton>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} lg={4}>
                                    <Item elevation={8} sx={{ background: "transparent", boxShadow: "none" }}>
                                    <IconButton sx={{ p: 1, display: "inline-block" }}>
                                        <Avatar alt="S" sx={{ width: "6vw", height: "6vw" }} src={Health3} />
                                    </IconButton>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                    {/* right of upper */}
                    <Grid elevation={10} item xs={12} md={8}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                </Grid>
            </Paper>
        </Paper>
    </ThemeProvider>
  )
}

export default Profile