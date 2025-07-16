import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AppBar from "../../components/AppBar/AppBar";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import { Course } from "./Course/Course";

import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../redux/userSlice.js/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  useEffect(() => {
    if (!user) {
      dispatch(
        setUser({
          id: Math.floor(Math.random() * 200),
          name: "Hung Nguyen",
          email: "x4A2g@example.com",
        })
      );
    }
  }, [dispatch, user]);
  return (
    <>
      <Box sx={{ mb: 4 }}>
        {/* <AppBar /> */}

        <Typography fontWeight={"bold"} gutterBottom variant="h4">
          Introduce
        </Typography>
        <SimpleSlider />

        <Course />
      </Box>
    </>
  );
}
