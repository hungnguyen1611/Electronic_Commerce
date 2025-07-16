import { Box, Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import ButtonToTop from "../../pages/Home/ButtonToTop/ButtonToTop";
import AppBar from "../AppBar/AppBar";
import SideBarLayout from "./SideBarLayout/SideBarLayout";

export default function Layout() {
  return (
    <Box>
      <AppBar />

      <Grid mt="64px" container>
        <Grid
          component={"main"}
          container
          display={{ xs: "none", sm: "block" }}
          size={{ sm: 3, md: 2 }}
        >
          <Box position={"fixed"} width={"inherit"} height={"100%"}>
            <SideBarLayout />
          </Box>
        </Grid>
        <Grid
          height={"calc(100vh - 64px)"}
          size={{ sm: 9, md: 10 }}
          my={2}
          // sx={{ overflowY: "auto", overflowX: "hidden", position: "relative" }}
        >
          <Container>
            <Outlet />
          </Container>
          <ButtonToTop />
        </Grid>
      </Grid>
    </Box>
  );
}
