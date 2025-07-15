import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/productSlice/productSlice";
import { selectUser } from "../../redux/userSlice.js/userSlice";
import ListCard from "../../components/ListCard/ListCard";

export default function Favourite() {
  const products = useSelector(selectProduct);
  const user = useSelector(selectUser);

  const favouriteProducts = products.filter((product) =>
    product.heart.includes(user.id)
  );
  return (
    <Box height={"100%"}>
      <Typography gutterBottom fontWeight={"bold"} variant="h4">
        Favorite List
      </Typography>
      {favouriteProducts.length > 0 ? (
        <ListCard educationProducts={favouriteProducts} />
      ) : (
        <Typography fontStyle={"italic"} sx={{ opacity: 0.5 }}>
          There are no favorite products !
        </Typography>
      )}
    </Box>
  );
}
