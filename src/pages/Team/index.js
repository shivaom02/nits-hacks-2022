import React from "react";
import { Button, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "../../components/Navbar";

import TeamPic from "../../images/teampic.jpeg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#989",
    },
  },
});

const Team = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Paper
        className="teamdiv"
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          backgroundImage: "linear-gradient(to bottom, #277fab, #a5c4d4)",
        }}
        elevation={0}
      >
        <Paper
          className="leftside"
          sx={{
            width: "60vw",
            height: "80vh",
            top: "15vh",
            left: "8vw",
            zIndex: 999,
            borderRadius: "20px",
            position: "fixed",
            color: "#eee",
          }}
          elevation={12}
        >
          <div style={{ maxWidth: "50vw" }}>
            <img
              style={{ maxWidth: "40vw", overflow: "hidden" }}
              src={TeamPic}
              alt="Team Pic"
            />
          </div>
        </Paper>
        <Paper
          className="rightside"
          sx={{
            float: "right",
            marginRight: "7vw",
            width: "30vw",
            height: "92vh",
            marginTop: "0",
            borderRadius: "0",
            background: "#000",
          }}
          elevation={0}
        >
          <Button color="primary" variant="contained">
            Right
          </Button>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

export default Team;
