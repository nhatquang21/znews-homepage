import { ICommonNews } from "@/types/common";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { fontSizes } from "@/themes/theme.config";
import Link from "next/link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function NewsCard({
  item,
  reverse = false,
}: {
  item: ICommonNews;
  reverse?: boolean;
}) {
  return (
    <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: reverse ? "row-reverse" : "row",
          alignItems: "center",
          gap: 2,
          cursor: "pointer",
          
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 120,
            height: 80,
            flexShrink: 0,
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={120}
            height={80}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          {item.isVideo && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 20,
                height: 20,
                background: "rgba(30, 100, 150, 0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 2,
                zIndex: 2,
              }}
            >
              <PlayArrowIcon sx={{ fill: "white", fontSize: fontSizes[4] }} />
            </Box>
          )}
        </Box>

        <Typography
          variant="h6"
          className="highlight-title"
          sx={{
            fontWeight: 700,
            fontSize: fontSizes[2],
            lineHeight: 1.4,
            alignSelf: "flex-start",
            transition: "color 0.2s",
          }}
        >
          {item.title}
          {item.category && (
            <Typography
              variant="body2"
              sx={{
                fontSize: fontSizes[1],
                "&:hover": {
                  color: "black",
                },
                cursor: "default",
                pointerEvents: "none",
              }}
            >
              {item.category}
            </Typography>
          )}
        </Typography>
      </Box>
    </Link>
  );
}
