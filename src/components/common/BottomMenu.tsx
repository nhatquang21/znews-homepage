'use client'

import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleIcon from "@mui/icons-material/Article";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import { useContext } from "react";
import { PopupContext } from "@/contexts/PopupContext";

export default function BottomMenu() {
  const { setIsActivePopup } = useContext(PopupContext);
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        borderTop: "1px solid #eee",
        display: {
          xs: "flex",
          md: "none",
        },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "space-around",
        alignItems: "center",
        py: 2,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <MenuIcon fontSize="small" onClick={() => setIsActivePopup(true)} />
        <Typography variant="caption" display="block">
          CHUYÊN MỤC
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <ArticleIcon fontSize="small" />
        <Typography variant="caption" display="block">
          TIN MỚI
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <PlayCircleOutlineIcon fontSize="small" />
        <Typography variant="caption" display="block">
          VIDEO
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <PodcastsIcon fontSize="small" />
        <Typography variant="caption" display="block">
          PODCAST
        </Typography>
      </Box>
    </Box>
  );
}
