import { Box, Button, Grid, IconButton, Modal, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { FaIoxhost } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectProduct } from "../../redux/productSlice/productSlice";
import { selectUser } from "../../redux/userSlice.js/userSlice";
import { CardItem } from "../Card/CardItem";
import SidebarItem from "../Layout/SideBarLayout/SideBarItem/SidbarItem";

export default function SugestProduct({ sideBar }) {
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const educationProducts = useSelector(selectProduct);
  const handleOpen = () => {
    if (products.length === 0) {
      toast.warning("There are currently no suggestions for you.");
      return;
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const fetchProduct = async () => {
  //   const res = await fetchProductByUser(user.id);
  //   setProducts(res);
  // };

  useEffect(() => {
    const filtered = educationProducts?.filter((item) =>
      item.heart.includes(user?.id)
    );

    const filtered2 = educationProducts?.filter((item) =>
      item.viewed.includes(user?.id)
    );

    const mernFiltered = filtered?.concat(filtered2);

    setProducts(mernFiltered);
  }, [educationProducts, user?.id]);
  return (
    <Box>
      {sideBar ? (
        <SidebarItem onClick={handleOpen} sx={{ textTransform: "capitalize" }}>
          <FaIoxhost />
          suggest
        </SidebarItem>
      ) : (
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ textTransform: "capitalize" }}
        >
          <FaIoxhost style={{ marginRight: "8px" }} />
          Suggest
        </Button>
      )}

      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <Box
          // height={"100%"}
          width={{ xs: "90%", md: "70%", lg: "50%" }}
          height={"90%"}
          sx={{
            display: "flex",
            position: "relative",
            overflowY: "auto",
            flexDirection: "column",
            bgcolor: "white",
            p: 5,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 1,
              right: 1,
              color: "red",
            }}
            onClick={handleClose}
          >
            <IoMdClose />
          </IconButton>
          <Grid container spacing={2}>
            {products?.length === 0
              ? Array.from(new Array(4)).map((_, index) => (
                  <Grid key={index} size={{ xs: 12, md: 6 }}>
                    <Skeleton variant="rectangular" height={200} />
                  </Grid>
                ))
              : products?.map((item, index) => (
                  <Grid key={index} size={{ xs: 12, md: 6 }}>
                    <CardItem hiddenAction item={item} />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
