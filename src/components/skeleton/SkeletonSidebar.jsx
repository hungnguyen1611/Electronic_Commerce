import { Box, Skeleton, Stack } from "@mui/material";

export default function SkeletonSidebar() {
  return (
    <Box
      height={"100%"}
      spacing={2}
      sx={{ display: { xs: "none", sm: "block" }, p: 2 }}
    >
      <Stack spacing={2}>
        {/* Skeleton cho nút Home */}
        <Skeleton variant="rounded" height={40} sx={{ borderRadius: 2 }} />

        {/* Các mục Favourites, Viewed */}
        {Array.from(new Array(3)).map((_, i) => (
          <Stack spacing={1} key={i}>
            <Stack spacing={1}>
              {[1, 2].map((_, i) => (
                <Box key={i} display="flex" alignItems="center" gap={1}>
                  <Skeleton variant="circular" width={24} height={24} />
                  <Skeleton variant="text" width={80} height={20} />
                </Box>
              ))}
            </Stack>

            <Skeleton variant="text" width="100%" height={10} />

            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width={80} height={20} />
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
