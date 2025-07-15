import { Box, Container, Grid, Typography } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProduct } from "../../api";
import AppBar from "../../components/AppBar/AppBar";
import CustomButton from "../../components/CustomButton/CustomButton";
import { formatterMoney } from "../../utils/formatter";

export default function Production() {
  const { id } = useParams();

  const [product, setProduct] = React.useState({});

  const confirm = useConfirm();

  const handleClick = async () => {
    const { confirmed } = await confirm({
      title: "Do you want to buy this course?",
      description: "This action is permanent!",
    });

    if (confirmed) {
      toast.success("Purchased successfully");
    }
  };
  useEffect(() => {
    fetchProduct(id).then((data) => setProduct(data));
  }, [id]);
  return (
    <Box>
      <AppBar />
      <Container sx={{ mt: 5 }}>
        <Grid spacing={4} container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{ width: "100%", aspectRatio: "16/9" }}
              component={"img"}
              src={product?.image}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography fontWeight={"bold"} variant="h4" gutterBottom>
              {product?.name}
            </Typography>
            <Typography fontStyle={"italic"} variant="body1" gutterBottom>
              {product?.description}
            </Typography>
            <Typography fontWeight={"bold"} variant="body1" gutterBottom>
              {formatterMoney(product?.price)}
            </Typography>
            <CustomButton onClick={handleClick}>Mua ngay</CustomButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
