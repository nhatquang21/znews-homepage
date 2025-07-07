"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fontSizes } from "@/themes/theme.config";
import MagazineCard from "./MagazineCard";
import { ICommonNews } from "@/types/common";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

export default function MagazineSlider({ data }: { data: ICommonNews[] }) {
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    afterChange: (index: number) => setCurrent(index),
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Tính toán canPrev/canNext
  const slidesToShow = 4; // hoặc lấy từ settings/responsive
  const canPrev = current > 0;
  const canNext = current < data.length - slidesToShow;

  return (
    <div className="max-w-[1100px] mx-auto mt-1 px-4 sm:px-0">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          my: 3,
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: fontSizes[5],
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              component="span"
              sx={{
                display: { xs: "none", sm: "inline-block" },
                width: 4,
                height: fontSizes[4],
                backgroundColor: "#dd3333",
                transform: "skew(-20deg)",
                verticalAlign: "middle",
                marginRight: 1.5,
              }}
            />
            MAGAZINE
          </Typography>
        </Box>
        <IconButton
          onClick={() => sliderRef.current?.slickPrev()}
          disabled={!canPrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: -32,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            width: 34,
            height: 34,
            border: "1px solid #ddd",
            background: "white !important",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            p: 0,
            "&:hover": {
              background: "#f5f5f5",
            },
            opacity: !canPrev ? 0.5 : 1,

            pointerEvents: "auto",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: fontSizes[4], color: "#222" }} />
        </IconButton>
        <IconButton
          onClick={() => sliderRef.current?.slickNext()}
          disabled={!canNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: -32,
            transform: "translate(50%, -50%)",
            zIndex: 10,
            width: 34,
            height: 34,
            background: "#fff",
            boxShadow: 1,
            border: "1px solid #eee",
            "&:hover": { background: "#f5f5f5" },

            pointerEvents: "auto",
            opacity: !canNext ? 0.5 : 1,
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: fontSizes[4], color: "#222" }} />
        </IconButton>
        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <Box key={item.slug} px={1}>
              <MagazineCard item={item} />
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
}
