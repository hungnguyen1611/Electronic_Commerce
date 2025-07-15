import { Box, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../redux/productSlice/productSlice";
import { selectUser } from "../../redux/userSlice.js/userSlice";
import { formatterMoney } from "../../utils/formatter";

export default function CardDetails({ toggle, CardItem }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const isHeart = CardItem?.heart?.includes(user.id);

  const handleClickOpen = () => {
    dispatch(
      updateProduct({ id: CardItem.id, userId: user.id, type: "viewed" })
    );

    setOpen(true);
  };

  const handleJoin = () => {
    navigate(`/product/${CardItem.id}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        sx={{ textTransform: "capitalize" }}
        onClick={handleClickOpen}
        variant="text"
      >
        Learn more
      </Button>
      <Dialog
        aria-hidden={open ? "false" : "true"}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <Box
            sx={{ width: "100%", aspectRatio: "16/9" }}
            component={"img"}
            src={CardItem?.image}
          />

          <DialogContentText gutterBottom sx={{ fontWeight: "bold", mt: 2 }}>
            {CardItem?.name}
          </DialogContentText>
          <DialogContentText>{CardItem?.description}</DialogContentText>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={toggle("heart")}>
                <CiHeart
                  style={{
                    display: isHeart ? "none" : "block",
                  }}
                />
                <IoMdHeart
                  style={{
                    display: isHeart ? "block" : "none",
                  }}
                />
              </IconButton>
              <Typography sx={{ ml: 0.5, display: "inline" }}>
                {CardItem?.heart.length}
              </Typography>
            </Box>
            <Typography fontWeight={"bold"} variant="body1" gutterBottom>
              {formatterMoney(CardItem?.price)}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleJoin}>Join</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
