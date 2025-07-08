"use client";
import { useEffect, useState } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={show}>
      <Fab
        // color="primary"
        size="medium"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 80,
          right: 16,
          background: '#01aae8 !important',
          zIndex: 1200,
          display: { xs: "flex", md: "none" },
          '&:active': {
            background: '#01aae8',
          }
          
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon sx={{
            fill: "white",
        }} />
      </Fab>
    </Zoom>
  );
}
