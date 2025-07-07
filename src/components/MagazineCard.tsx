import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ICommonNews } from "@/types/common";
import { fontSizes } from "@/themes/theme.config";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Link from "next/link";

export default function MagazineCard({ item }: { item: ICommonNews }) {
  const { image, title, label } = item;

  return (
    <Link href={`/${item.slug}`} style={{ display: "block", height: "100%" }}>
      <Box
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          minHeight: 400,
          background: "#222",
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          cursor: "pointer",
          "&:hover .magazine-img": {
            transform: "scale(1.18)",
          },
          "&:hover .magazine-title": {
            color: "#ffe066",
            textShadow: "none",
          },
          "&:hover .magazine-icon-bg": {
            background: "#ffe066",
          },
          "&:hover .magazine-icon": {
            color: "#222",
            fill: "#222 !important",
          },
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="magazine-img"
          style={{
            objectFit: "cover",
            zIndex: 1,
            transition: "transform 1s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,

            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            zIndex: 3,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            background: "#ffe066",
            color: "#222",
            fontWeight: 700,
            px: 2,
            py: 0.5,
            fontSize: fontSizes[1],
            letterSpacing: 1,
            textTransform: "uppercase",
            display: "inline-block",
            border: "none",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          {label}
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: 32,
            transform: "translateX(-50%)",
            zIndex: 3,
            width: "100%",
            height: 160,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 6,
              background: "#ffe066",
              borderRadius: 2,
              mb: 2,
              mx: "auto",
            }}
          />
          <Typography
            variant="h6"
            className="magazine-title"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              fontSize: fontSizes[5],
              px: 2,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              transition: "color 0.3s, text-shadow 0.3s",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 32,
              height: 32,
              background: "black",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: 1,
              transition: "background 0.3s",
              color: "#ffe066",
            }}
            className="magazine-icon-bg"
          >
            <LaptopMacIcon
              className="magazine-icon"
              sx={{
                fill: "#ffe066 !important",
                fontSize: fontSizes[5],
                transition: "color 0.3s",
                "&:hover": {
                  color: "#222",
                  fill: "#222",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
