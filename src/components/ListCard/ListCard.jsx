import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/productSlice/productSlice";
import { CardItem } from "../Card/CardItem";
import SkeletonLoader from "../skeleton/skeletonLoader";

export default function ListCard({ educationProducts }) {
  const loading = useSelector(selectLoading);

  return (
    <Grid container rowSpacing={4} columnSpacing={2}>
      {(loading
        ? Array.from({ length: 4 }, (_, i) => ({ id: i }))
        : educationProducts || []
      )?.map((item, index) => (
        <Grid key={item.id || index} item xs={12} sm={6} md={4} lg={3}>
          {loading || item ? <SkeletonLoader /> : <CardItem item={item} />}
        </Grid>
      ))}
    </Grid>
  );
}
