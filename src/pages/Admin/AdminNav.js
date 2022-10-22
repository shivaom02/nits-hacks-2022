import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#AFC13C" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Admin" sx={{ float: "right" }}>
              <IconButton sx={{ p: 0 }} sx={{ float: "right" }}>
                <Avatar
                  alt="S"
                  sx={{ backgroundColor: "#AFC13C" }}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
