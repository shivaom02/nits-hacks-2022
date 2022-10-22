import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Link,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "../../components/Navbar";

import ProfilePic from "../../images/profilepic.svg";
import Health1 from "../../images/health1.svg";
import Health2 from "../../images/health2.svg";
import Health3 from "../../images/health3.svg";
import Graph from "../../images/graph.PNG";
import Coin from "../../images/coin.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  palette: {},
});

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Paper
        elevation={0}
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* upper part */}
        <Paper
          elevation={0}
          className="home1"
          sx={{
            height: "70vh",
            width: "90vw",
            margin: "0 auto",
            marginTop: "3vh",
            position: "relative",
          }}
        >
          <Grid container spacing={2}>
            {/* left of upper */}
            <Grid
              elevation={12}
              item
              xs={12}
              md={4}
              sx={{
                height: "70vh",
                boxShadow: "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Item sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}>
                {/* pcture name part */}
                <Grid container spacing={0}>
                  <Grid item sm={12} md={4}>
                    <Item
                      elevation={8}
                      sx={{ background: "transparent", boxShadow: "none" }}
                    >
                      <IconButton sx={{ p: 1, display: "inline-block" }}>
                        <Avatar
                          alt="S"
                          sx={{
                            backgroundColor: "#AFC13C",
                            width: "6vw",
                            height: "6vw",
                          }}
                          src={ProfilePic}
                        />
                      </IconButton>
                    </Item>
                  </Grid>
                  <Grid item sm={12} md={8}>
                    <Item
                      elevation={0}
                      sx={{ background: "transparent", boxShadow: "none" }}
                    >
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                        >
                          Ted{" "}
                          <span
                            style={{ color: "#3CC151", marginBottom: "1.5rem" }}
                          >
                            Bundy
                          </span>
                        </Typography>
                        <Typography>
                          Computer Science and Engineering <br />
                          1912099 <br />
                          Hostel 7
                        </Typography>
                        <Typography
                          sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                        >
                          Rank:{" "}
                          <span style={{ color: "#A6B92D", marginTop: "2rem" }}>
                            12
                          </span>
                        </Typography>
                      </Box>
                    </Item>
                  </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={1} xs={{ mt: 3, display: "block" }}>
                  <Grid item xs={12} lg={4}>
                    <Item
                      elevation={8}
                      sx={{ background: "transparent", boxShadow: "none" }}
                    >
                      <IconButton sx={{ p: 1, display: "inline-block" }}>
                        <Avatar
                          alt="S"
                          sx={{ width: "7vw", height: "7vw" }}
                          src={Health1}
                        />
                      </IconButton>
                    </Item>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Item
                      elevation={8}
                      sx={{ background: "transparent", boxShadow: "none" }}
                    >
                      <IconButton sx={{ p: 1, display: "inline-block" }}>
                        <Avatar
                          alt="S"
                          sx={{ width: "5.8vw", height: "5.8vw" }}
                          src={Health2}
                        />
                      </IconButton>
                    </Item>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Item
                      elevation={8}
                      sx={{ background: "transparent", boxShadow: "none" }}
                    >
                      <IconButton sx={{ p: 1, display: "inline-block" }}>
                        <Avatar
                          alt="S"
                          sx={{ width: "6vw", height: "6vw" }}
                          src={Health3}
                        />
                      </IconButton>
                    </Item>
                  </Grid>
                </Grid>
                <Typography>
                  Waste collected yet:{" "}
                  <span style={{ color: "#3cc151" }}>1.2 kg</span>
                </Typography>
                <Link
                  sx={{
                    backgroundImage:
                      "linear-gradient(to right, #ff0000, #ff7a00)",
                    color: "#fff",
                    borderRadius: "4rem",
                    p: 1.5,
                    pl: 4,
                    pr: 4,
                    letterSpacing: "1px",
                    display: "inline-block",
                    m: 4,
                    fontSize: "1rem",
                  }}
                  underline="none"
                >
                  Request Emergency Pickup
                </Link>
              </Item>
            </Grid>
            {/* right of upper */}
            <Grid elevation={12} item xs={12} md={8}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Item sx={{ background: "transparent", boxShadow: "none" }}>
                      <Typography variant="h5" sx={{ textAlign: "left", m: 2 }}>
                        Your Green Score:{" "}
                        <span style={{ color: "#3cc151", fontWeight: 500 }}>
                          225
                        </span>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item sx={{ background: "transparent", boxShadow: "none" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          textAlign: "left",
                          mr: 1,
                          mt: 4,
                          display: "inline-block",
                        }}
                      >
                        12
                      </Typography>
                      <IconButton sx={{ p: 1, display: "inline-block" }}>
                        <Avatar
                          alt="S"
                          sx={{
                            width: "2vw",
                            height: "2vw",
                            m: "0 auto",
                            borderRadius: 0,
                            border: "none",
                          }}
                          src={Coin}
                        />
                      </IconButton>
                    </Item>
                  </Grid>
                </Grid>
                <br />
                <Grid container spacing={8}>
                  <Grid item xs={12} lg={4}>
                    <Item
                      sx={{
                        background: "#48A9F8",
                        height: "14vh",
                        borderRadius: "2rem",
                      }}
                    >
                      <Typography
                        sx={{ color: "#fff", textAlign: "right", mt: "3.5vh" }}
                      >
                        Total waste Recycled:{" "}
                        <span style={{ display: "block", fontSize: "2rem" }}>
                          12Kg
                        </span>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Item
                      sx={{
                        background: "#19d085",
                        height: "14vh",
                        borderRadius: "2rem",
                      }}
                    >
                      <Typography
                        sx={{ color: "#fff", textAlign: "right", mt: "3.5vh" }}
                      >
                        Total carbon emission saved:{" "}
                        <span style={{ display: "block", fontSize: "2rem" }}>
                          109Kg
                        </span>
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Item
                      sx={{
                        background: "#8ac841",
                        height: "14vh",
                        borderRadius: "2rem",
                      }}
                    >
                      <Typography
                        sx={{ color: "#fff", textAlign: "right", mt: "3.5vh" }}
                      >
                        Streak:{" "}
                        <span style={{ display: "block", fontSize: "2rem" }}>
                          125 days
                        </span>
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
                <IconButton sx={{ p: 1, display: "inline-block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "90%",
                      height: "80%",
                      m: "0 auto",
                      mt: 4,
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Graph}
                  />
                </IconButton>
              </Item>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          elevation={13}
          sx={{ height: "10vh", width: "27vw", ml: "4vw", mt: 1, p: 2 }}
        >
          <Typography variant="h6">
            My <span style={{ color: "#3CC151" }}>Tree</span>
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Days since last scanned: <span style={{ color: "#3CC151" }}>3</span>
          </Typography>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

export default Profile;
