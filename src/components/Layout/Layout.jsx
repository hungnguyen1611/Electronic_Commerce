import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Home from "../../pages/Home/Home";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import SideBarLayout from "./SideBarLayout/SideBarLayout";
import ButtonToTop from "../../pages/Home/ButtonToTop/ButtonToTop";

export default function Layout() {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const fullHeight = document.documentElement.scrollHeight;
    setPageHeight(fullHeight);
  }, []);
  return (
    <Box>
      <AppBar />

      <Grid component={"main"} container>
        <Grid
          display={{ xs: "none", sm: "block" }}
          sx={{ height: `${pageHeight}px` }}
          size={{ sm: 3, md: 2 }}
        >
          <SideBarLayout />
        </Grid>
        <Grid
          height={"calc(100vh - 64px)"}
          pt={2}
          size={{ sm: 9, md: 10 }}
          // sx={{ overflowY: "scroll", overflowX: "hidden" }}
        >
          <Container>
            <Outlet />
          </Container>
        </Grid>
      </Grid>
      <ButtonToTop />
    </Box>
  );
}
