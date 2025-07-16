import {
  AppBar as AppBarMui,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import SideBar from "../SideBar/SideBar";
import Autocomplete from "@mui/material/Autocomplete";

import { useDebounceFn } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import SugestProduct from "../SuggestProduct/SugestProduct";
import { fetchProducts } from "../../api/api_json_server";
export default function AppBar() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const handleInputSearchChange = (event) => {
    const searchValue = event.target?.value;
    if (!searchValue) return;

    const searchPath = `?name_like=${searchValue}`;

    setLoading(true);
    fetchProducts(searchPath)
      .then((res) => {
        setProducts(res || []);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debounceSearchBoards = useDebounceFn(handleInputSearchChange, 1000);

  const handleSelectedBoard = (event, product) => {
    if (product) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <>
      <AppBarMui position="fixed" sx={{ bgcolor: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
          <Typography fontWeight={"bold"} color="#000">
            Commonerce
          </Typography>

          <Autocomplete
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            getOptionLabel={(option) => option.name}
            noOptionsText={
              !products
                ? "Search for a product"
                : "No product found, please try again"
            }
            options={products || []}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            loading={loading}
            onInputChange={debounceSearchBoards}
            onChange={handleSelectedBoard}
            sx={{ width: "40%", flexGrow: { xs: 1, sm: 0 } }}
            renderInput={(params) => (
              <CustomInput
                {...params}
                sx={{
                  "& .MuiInputBase-root .MuiAutocomplete-input": {
                    padding: "4px 16px",
                  },
                }}
                placeholder="Search"
              />
            )}
          />

          {/* <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button sx={{ textTransform: "capitalize" }}>
              Product suggestions
            </Button>
          </Box> */}

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <SugestProduct />
          </Box>

          <SideBar />
        </Toolbar>
      </AppBarMui>
      <Toolbar />
      {/* Place the tool Bar here to keep the original position like sticky (because sticky will drift when applying sroll to the browser, this will fix that*/}
    </>
  );
}
