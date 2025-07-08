import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ICommonNews } from "@/types/common";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { fontSizes } from "@/themes/theme.config";

export default function MultimediaSideCard({ item }: { item: ICommonNews }) {
  return (
    <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <div style={{ display: "inline" }}>
        <InsertPhotoIcon
          sx={{
            opacity: 0.6,
            mr: 1,
            fontSize: fontSizes[4],
            cursor: "default",
            verticalAlign: "top",
          }}
        />
       
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              display: "inline",
              lineHeight: 1.2,
             
              verticalAlign: "top",
            }}
          >
            {item.title}
          </Typography>
        
      </div>
    </Link>
  );
}
