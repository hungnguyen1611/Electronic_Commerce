import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/productSlice/productSlice";
import { CardItem } from "../Card/CardItem";
import SkeletonLoader from "../skeleton/skeletonLoader";

export default function ListCard({ educationProducts = [] }) {
  const loading = useSelector(selectLoading);
  // const loading = true;
  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      {/* {(loading ? [...Array.from({ length: 4 })] : educationProducts).map(
        (item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            {item ? <CardItem item={item} /> : <SkeletonLoader />}
          </Grid>
        )
      )} */}
      {loading
        ? [...Array.from({ length: 4 })].map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <SkeletonLoader />
            </Grid>
          ))
        : educationProducts.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CardItem item={item} />
            </Grid>
          ))}
    </Grid>
  );
}
