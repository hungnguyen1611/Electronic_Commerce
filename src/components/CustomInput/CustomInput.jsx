import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// eslint-disable-next-line no-unused-vars
const CustomInput = styled(TextField)(({ theme }) => ({
  "& input": {
    padding: "8px 16px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "25px",
  },
}));

export default CustomInput;
