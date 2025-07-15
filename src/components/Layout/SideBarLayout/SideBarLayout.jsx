import { Box, Divider, Stack } from "@mui/material";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SideBarItem/SidbarItem";
import { FaHeart } from "react-icons/fa";
import { TbEyeSearch } from "react-icons/tb";
import { IoFilterCircle } from "react-icons/io5";
import FilterProduct from "./FilterProduct/FilterProduct";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../redux/productSlice/productSlice";
import SkeletonSidebar from "../../skeleton/SkeletonSidebar";
import SugestProduct from "../../SuggestProduct/SugestProduct";
import { useCloseDrawer } from "../../SideBar/closeDrawer.jsx";

export default function SideBarLayout() {
  const loading = useSelector(selectLoading);
  // const loading = true;

  const closeDrawer = useCloseDrawer();

  return (
    <>
      {!loading ? (
        <Stack
          height={"100%"}
          bgcolor={"#85c1e9"}
          spacing={2}
          sx={{
            p: 2,
          }}
        >
          <SidebarItem onClick={closeDrawer} component={NavLink} to="/">
            <IoIosHome />
            Home
          </SidebarItem>

          <SidebarItem
            onClick={closeDrawer}
            component={NavLink}
            to="/favourite"
          >
            <FaHeart />
            Favourite
          </SidebarItem>

          <SidebarItem onClick={closeDrawer} component={NavLink} to="/viewed">
            <TbEyeSearch />
            Viewed
          </SidebarItem>

          <Divider sx={{ bgcolor: "#fff" }} />
          <SugestProduct sideBar />
          <FilterProduct />
        </Stack>
      ) : (
        <SkeletonSidebar />
      )}
    </>
  );
}
