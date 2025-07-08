import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ICommonNews } from "@/types/common";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { fontSizes } from "@/themes/theme.config";

export default function MultimediaMainCard({ item }: { item: ICommonNews }) {
  return (
    <Box
      sx={{
        "&:hover .highlight-title": {
          color: "var(--hover-title)",
        },
        cursor: "default",
        pointerEvents: "none",
      }}
    >
      <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/11",
            overflow: "hidden",
            mb: 2,
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box sx={{ display: "inline", cursor: "default", pointerEvents: "none" }}>
          
          <InsertPhotoIcon
            sx={{
              opacity: 0.6,
              mr: 1,
              fontSize: fontSizes[6],
              mt: 1,
            }}
            
          />
          
          <Typography
            variant="h5"
            className="highlight-title"
            sx={{
              fontWeight: 700,
              color: "#222",
              mb: 1,
              display: "inline",
              alignItems: "center",
              cursor: "pointer",
              pointerEvents: "auto",
              verticalAlign: "top",
            }}
          >
            {item.title}
          </Typography>
        </Box>
        {item.desc && (
          <Typography variant="body2" sx={{ color: "#444" }}>
            {item.desc}
          </Typography>
        )}
      </Link>
    </Box>
  );
}
