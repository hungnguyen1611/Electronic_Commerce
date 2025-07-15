import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import CardDetails from "../CardDetails/CardDetails";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice.js/userSlice";
import { updateProduct } from "../../redux/productSlice/productSlice";
import { IoEyeSharp } from "react-icons/io5";

export const CardItem = ({ item, hiddenAction }) => {
  const dispatch = useDispatch();
  // const usertest = JSON.parse(localStorage.getItem("usertest"));
  const user = useSelector(selectUser);

  const isViewed = item?.viewed?.includes(user.id);

  const toggle = (type) => async () => {
    dispatch(updateProduct({ id: item.id, userId: user.id, type }));
  };

  return (
    <Card
      sx={{
        // Đảm bảo card cao 100% để có thể dùng flex :1 ở cardContent giúp đồng bộ về chiệu cao
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={item?.image}
        alt={item?.name}
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography sx={{ flexGrow: 1 }} gutterBottom variant="h5">
          {item?.name}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="body2"
        >
          {item?.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "flex-end",
        }}
      >
        {!hiddenAction && (
          <>
            <IconButton onClick={toggle("heart")}>
              <CiHeart
                style={{
                  display: item?.heart.includes(user.id) ? "none" : "block",
                }}
              />
              <IoMdHeart
                style={{
                  display: item?.heart.includes(user.id) ? "block" : "none",
                }}
              />
            </IconButton>
            {isViewed && <IoEyeSharp size={24} />}
          </>
        )}

        <CardDetails toggle={toggle} CardItem={item} />
      </CardActions>
    </Card>
  );
};
