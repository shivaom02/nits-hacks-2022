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

import AdminNav from "./AdminNav";

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

const Admin = () => {
  return (
    <div>
      <AdminNav />
      Admin
    </div>
  );
};

export default Admin;
