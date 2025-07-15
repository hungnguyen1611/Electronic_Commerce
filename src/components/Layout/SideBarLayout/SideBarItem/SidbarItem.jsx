import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SidebarItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  backgroundColor: "#85c1e9",
  padding: "12px 16px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#2471a3 ",
  },
  color: "#fff",
  "&.active": {
    backgroundColor: "#2471a3",
  },
}));

export default SidebarItem;
