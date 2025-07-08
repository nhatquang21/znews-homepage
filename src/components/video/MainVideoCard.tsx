"use client";
import { Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import { ICommonNews } from "@/types/common";
import Image from "next/image";

interface Props {
  data: ICommonNews;
}

export default function MainVideoCard({ data }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        background: "#000",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={() => !playing && setPlaying(true)}
    >
      {!playing ? (
        <>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
            }}
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              style={{ objectFit: "cover", display: "block", borderRadius: 2 }}
              sizes="100vw"
              priority
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#00558aba",
              borderRadius: "40%",
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayArrowIcon sx={{ fill: "white", fontSize: 48 }} />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
          }}
        >
          <video controls width="100%" poster={data.image}>
            <source src={data.videoUrl} type="video/mp4" />
          </video>
        </Box>
      )}
    </Box>
  );
}
