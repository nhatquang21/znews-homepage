import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ICommonNewsWithDesc } from "@/types/common";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { fontSizes } from "@/themes/theme.config";

export default function MultimediaMainCard({
  item,
}: {
  item: ICommonNewsWithDesc;
}) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/11",
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Link>
      </Box>

      <div style={{ display: "inline" }}>
        <InsertPhotoIcon
          sx={{ opacity: 0.6, mr: 1, fontSize: fontSizes[6], mt: 1 }}
        />
        <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#222",
              mb: 1,
              display: "inline",
              alignItems: "center",
              "&:hover": {
                color: "var(--hover-title)",
              },
              verticalAlign: "top",
            }}
          >
            {item.title}
          </Typography>
        </Link>
      </div>
      {item.desc && (
        <Typography variant="body2" sx={{ color: "#444" }}>
          {item.desc}
        </Typography>
      )}
    </>
  );
}
