import { Box, Skeleton } from "@mui/material";
import { IoMdListBox } from "react-icons/io";

export default function SkeletonLoader() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Skeleton
        variant="rectangular"
        sx={{ width: "100%", minWidth: 100, maxWidth: 500 }}
        height={200}
      />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton />
      </Box>
    </Box>
  );
}
