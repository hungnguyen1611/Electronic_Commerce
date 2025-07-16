import { Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../../components/Card/CardItem";
import {
  fetchProducts,
  selectProduct,
} from "../../../redux/productSlice/productSlice";
import ListCard from "../../../components/ListCard/ListCard";

export const Course = () => {
  const dispatch = useDispatch();

  // const [educationProducts, setEducationProducts] = React.useState([]);
  const educationProducts = useSelector(selectProduct);

  useEffect(() => {
    // const fetch = async () => {
    //   const res = await axios.get("/api/products");
    //   setEducationProducts(res.data);
    // };
    // fetch();

    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Stack py={4} spacing={4} component={"section"}>
      <Typography fontWeight={"bold"} variant="h4">
        Course
      </Typography>

      {/* <Grid container rowSpacing={4} columnSpacing={2}>
        {educationProducts?.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <CardItem item={item} key={index} />
          </Grid>
        ))}
      </Grid> */}

      <ListCard educationProducts={educationProducts} />
    </Stack>
  );
};
