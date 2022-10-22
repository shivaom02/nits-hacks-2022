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

import Coin from "../../images/coin.svg";
import Redeem1 from "../../images/redeem1.jpg";
import Redeem2 from "../../images/redeem2.jpg";
import Redeem3 from "../../images/redeem3.jpg";
import Redeem4 from "../../images/redeem4.jpg";
import Redeem5 from "../../images/redeem5.webp";
import Redeem6 from "../../images/redeem6.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Redeem = () => {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Navbar />
      <br />
      <Paper
        elevation={0}
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Paper
          elevation={0}
          xs={{
            display: "block",
            width: "80vw",
            margin: "0 auto",
            p: 4,
            background: "transparent",
          }}
        >
          <Grid container spacing={2} sx={{ background: "transparent" }}>
            <Grid item xs={8}>
              <Item sx={{ background: "transparent", boxShadow: "none" }}>
                <Typography variant="h5" sx={{ textAlign: "left", m: 2 }}>
                  Your Green Score:{" "}
                  <span style={{ color: "#3cc151", fontWeight: 500 }}>225</span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item
                sx={{
                  background: "transparent",
                  float: "right",
                  boxShadow: "none",
                  pr: 4,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "left",
                    mr: 1,
                    transform: "translateY(4px)",
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
        </Paper>
        <br />
        <br />
        <Paper xs={{ width: "80vw", m: "0 auto", background: "orange" }}>
          <Grid
            container
            spacing={4}
            xs={{ width: "100%", p: 4, background: "orange" }}
          >
            <Grid item xs={12} lg={4}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <IconButton sx={{ p: 1, display: "block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "15vw",
                      height: "15vw",
                      m: "0 auto",
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Redeem1}
                  />
                </IconButton>
                <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                  Redeem for{" "}
                  <span style={{ color: "#3CC151" }}>125 Green Coins</span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <IconButton sx={{ p: 1, display: "block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "15vw",
                      height: "15vw",
                      m: "0 auto",
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Redeem2}
                  />
                </IconButton>
                <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                  Redeem for{" "}
                  <span style={{ color: "#3CC151" }}>150 Green Coins</span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <IconButton sx={{ p: 1, display: "block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "15vw",
                      height: "15vw",
                      m: "0 auto",
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Redeem3}
                  />
                </IconButton>
                <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                  Redeem for{" "}
                  <span style={{ color: "#3CC151" }}>201 Green Coins</span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <IconButton sx={{ p: 1, display: "block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "15vw",
                      height: "15vw",
                      m: "0 auto",
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Redeem4}
                  />
                </IconButton>
                <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                  Redeem for{" "}
                  <span style={{ color: "#3CC151" }}>250 Green Coins</span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <IconButton sx={{ p: 1, display: "block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "15vw",
                      height: "15vw",
                      m: "0 auto",
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Redeem5}
                  />
                </IconButton>
                <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                  Redeem for{" "}
                  <span style={{ color: "#3CC151" }}>300 Green Coins</span>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item sx={{ display: "flex", flexDirection: "column" }}>
                <IconButton sx={{ p: 1, display: "block" }}>
                  <Avatar
                    alt="S"
                    sx={{
                      width: "15vw",
                      height: "15vw",
                      m: "0 auto",
                      borderRadius: 0,
                      border: "none",
                    }}
                    src={Redeem6}
                  />
                </IconButton>
                <Typography sx={{ textAlign: "center", fontWeight: 500 }}>
                  Redeem for{" "}
                  <span style={{ color: "#3CC151" }}>601 Green Coins</span>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Paper>
        <br />
        <br />
      </Paper>
    </Paper>
  );
};

export default Redeem;
