import { Box, Collapse, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoFilterCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { fetchProductsFilter } from "../../../../redux/productSlice/productSlice";
import SidebarItem from "../SideBarItem/SidbarItem";
import { useCloseDrawer } from "../../../SideBar/closeDrawer";

const priceList = [
  {
    // value: 0 used for all products
    value: "1-50000",
    label: "From 0 - 50",
    icon: <IoIosArrowRoundUp />,
  },
  {
    value: "50000-100000",
    label: "50 - 100",
    icon: <IoIosArrowRoundUp />,
  },
  {
    value: "100000-200000",
    label: "100 - 200",
    icon: <IoIosArrowRoundUp />,
  },
  {
    value: "200000-300000",
    label: "200 - 300",
    icon: <IoIosArrowRoundUp />,
  },
  {
    value: "300000-",
    label: "greater than 300",
    icon: <IoIosArrowRoundUp />,
  },
  {
    value: "0",
    label: "All",
    icon: <IoIosArrowRoundUp />,
  },
];

export default function FilterProduct() {
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const closeDrawer = useCloseDrawer();

  const handleChange = (event) => {
    const selectedValue = event.target.value;

    setPrice(selectedValue);

    const [from, to] = selectedValue.split("-");

    let query = "";

    if (from) query += `price_gte=${from}`;
    if (to) query += `&price_lte=${to}`;
    dispatch(fetchProductsFilter(`?${query}`));

    closeDrawer();
  };

  return (
    <Box>
      <SidebarItem
        className={open ? "active" : ""}
        onClick={() => setOpen(!open)}
      >
        <IoFilterCircle />
        Filter
      </SidebarItem>

      <Collapse
        sx={{ "& label.Mui-focused": { color: "#fff" }, mt: 1.5 }}
        in={open}
      >
        <Select
          fullWidth
          value={price}
          onChange={handleChange}
          displayEmpty
          renderValue={(selected) => {
            if (!selected) return <em>Select price level</em>;
            const option = priceList.find((item) => item.value === selected);
            return option ? option.label : selected;
          }}
          id="demo-simple-select"
          name="price"
          sx={{
            color: "#fff",
            backgroundColor: "#85c1e9",
            "& .MuiSelect-select": {
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "8px",
              paddingRight: "32px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
            "& svg": {
              color: "#fff",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#2c3e50",
                color: "#fff",
              },
            },
          }}
        >
          {priceList.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Box>{item.icon}</Box>
                <Box>{item.label}</Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </Collapse>
    </Box>
  );
}
