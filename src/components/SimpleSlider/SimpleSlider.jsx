import { Box, Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { selectLoading } from "../../redux/productSlice/productSlice";

export default function SimpleSlider() {
  const loading = useSelector(selectLoading);
  // const loading = true;
  const settings = {
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    // arrows: false,
    // dots: false,
  };

  const listImages = [
    {
      url: "https://img.freepik.com/free-vector/e-learning-concept-flat-background_52683-7443.jpg?semt=ais_hybrid&w=740",
    },
    {
      url: "https://www.shutterstock.com/shutterstock/photos/2105521244/display_1500/stock-photo-young-man-student-studying-at-home-looking-at-a-laptop-2105521244.jpg",
    },
    {
      url: "https://www.insead.edu/sites/insead/files/styles/content_selection_desktop/public/2025-06/dp_home-page-thomas-pesquet.png.webp?itok=JcTpzyee",
    },
  ];
  return (
    // Khi dùng slice cần phải có só phần tử lặp nhiều hơn 1 ko sẽ xảy ra lỗi  ui
    <>
      {!loading ? (
        <Slider {...settings}>
          {listImages.map((image, index) => (
            <Box
              sx={{
                height: 300,
                aspectRatio: "16/9",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 4,
                "&:hover": {
                  cursor: "grab",
                },
                "&:active": {
                  cursor: "grabbing",
                },
              }}
              key={index}
              component="img"
              src={image.url}
            />
          ))}
        </Slider>
      ) : (
        <Skeleton variant="rounded" height={200} sx={{ borderRadius: 2 }} />
      )}
    </>
  );
}
