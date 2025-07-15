import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectProduct } from "../../redux/productSlice/productSlice";
import { selectUser } from "../../redux/userSlice.js/userSlice";
import ListCard from "../../components/ListCard/ListCard";

export default function Viewed() {
  const products = useSelector(selectProduct);
  const user = useSelector(selectUser);

  const viewedProducts = products.filter((product) =>
    product.viewed.includes(user.id)
  );
  return (
    <Box height={"100%"}>
      <Typography gutterBottom fontWeight={"bold"} variant="h4">
        Viewed List
      </Typography>
      {viewedProducts.length > 0 ? (
        <ListCard educationProducts={viewedProducts} />
      ) : (
        <Typography fontStyle={"italic"} sx={{ opacity: 0.5 }}>
          There are no viewed products !
        </Typography>
      )}
    </Box>
  );
}
