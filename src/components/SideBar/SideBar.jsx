import { Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import SideBarLayout from "../Layout/SideBarLayout/SideBarLayout";
import { CloseDrawerContext } from "./closeDrawer.jsx";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <CloseDrawerContext.Provider value={toggleDrawer(false)}>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <IconButton onClick={toggleDrawer(true)}>
          <IoIosMenu />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 280, height: "100%" }}>
            <SideBarLayout closeDrawer={toggleDrawer(false)} />
          </Box>
        </Drawer>
      </Box>
    </CloseDrawerContext.Provider>
  );
}
