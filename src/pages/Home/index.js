import React from "react";
import { Paper, Typography, Grid, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material";

import PIC1 from "../../images/pic1.svg";
import PIC2 from "../../images/pic2.svg";

import Navbar from "../../components/Navbar";

const theme = createTheme({
  palette: {},
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const index = () => {
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
        {/* page 1 */}
        <Paper
          elevation={0}
          className="home1"
          sx={{
            height: "90vh",
            width: "90vw",
            margin: "0 auto",
            marginTop: "3vh",
            position: "relative",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              elevation={0}
              item
              xs={12}
              md={6}
              sx={{
                height: "90vh",
                boxShadow: "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Item sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}>
                <Typography
                  variant="h1"
                  sx={{
                    mt: "15vh",
                    ml: "3vw",
                    fontSize: "6rem",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Making <span style={{ color: "#A6B92D" }}>NITS Green</span>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", ml: 4, mr: 4, textAlign: "left" }}
                >
                  The greenest campus of India, home to the smartest engineers
                  of the country. Among top 200 greenest colleges of India
                </Typography>
                <Link
                  sx={{
                    backgroundImage:
                      "linear-gradient(to right, #ADBB31, #456D4E)",
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
                  Let's get started
                </Link>
              </Item>
            </Grid>
            <Grid
              elevation={0}
              item
              xs={12}
              md={6}
              sx={{
                height: "90vh",
                position: "relative",
                boxShadow: "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Item sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}>
                <img
                  src={PIC1}
                  alt="PIC"
                  style={{ height: "40vw", width: "40vw" }}
                />
              </Item>
            </Grid>
          </Grid>
        </Paper>
        {/* page 2 */}
        <Paper
          elevation={0}
          className="home2"
          sx={{
            height: "90vh",
            width: "90vw",
            margin: "0 auto",
            marginTop: "3vh",
            position: "relative",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              elevation={0}
              item
              md={6}
              sm={12}
              sx={{
                height: "90vh",
                position: "relative",
                boxShadow: "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Item sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}>
                <img
                  src={PIC2}
                  alt="PIC"
                  style={{ height: "40vw", width: "40vw" }}
                />
              </Item>
            </Grid>
            <Grid
              elevation={0}
              item
              md={6}
              sm={12}
              sx={{
                height: "90vh",
                boxShadow: "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Item sx={{ boxShadow: "none", backgroundColor: "#f9f9f9" }}>
                <Typography
                  variant="h1"
                  sx={{
                    mt: "15vh",
                    ml: "3vw",
                    fontSize: "4rem",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  <span style={{ color: "#A6B92D" }}>What</span> we do
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    ml: 4,
                    mr: 4,
                    mt: 3,
                    textAlign: "left",
                  }}
                >
                  The solution focuses on reducing the net carbon emission to
                  zero in the campus using incentives and technology...
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1rem",
                    ml: 4,
                    mr: 4,
                    mt: 3,
                    textAlign: "left",
                  }}
                >
                  NIT Silchar focuessed web app
                  <br />
                  Track various carbon emission
                  <br />
                  Garbage collection and monetary benefit for stakeholders
                  <br />
                  Blockchain-based Green Coins and an NFT for planting
                  activities
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

export default index;
