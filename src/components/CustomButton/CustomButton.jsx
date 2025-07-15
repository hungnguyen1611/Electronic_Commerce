import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(() => ({
  borderRadius: "20px",
  textTransform: "capitalize",
  background: "#1976d2",
  color: "#fff",
  padding: "8px 16px",
}));

export default CustomButton;
