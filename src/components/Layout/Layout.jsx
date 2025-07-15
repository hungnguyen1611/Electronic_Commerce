import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Home from "../../pages/Home/Home";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import SideBarLayout from "./SideBarLayout/SideBarLayout";

export default function Layout() {
  return (
    <Box>
      <AppBar />

      <Grid component={"main"} container>
        <Grid display={{ xs: "none", sm: "block" }} size={{ sm: 3, md: 2 }}>
          <SideBarLayout />
        </Grid>
        <Grid
          height={"calc(100vh - 64px)"}
          pt={2}
          size={{ sm: 9, md: 10 }}
          sx={{ overflowY: "auto", overflowX: "hidden" }}
        >
          <Container>
            <Outlet />
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
