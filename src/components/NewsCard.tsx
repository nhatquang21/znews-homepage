import { ICommonNews } from "@/types/common";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { fontSizes } from "@/themes/theme.config";

export const NewsCard = ({ item }: { item: ICommonNews }) => {
  return (
    <Link href={`/${item.slug}`} style={{ textDecoration: "none", flex: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 1, sm: 1.5 },
          alignItems: "flex-start",
          p: { xs: 1, sm: 1 },
          borderRadius: 2,
          background: "#fff",
          boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
          mb: 0,
          cursor: "default",
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
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
        </Box>

        <Typography
          variant="h6"
          className="highlight-title"
          sx={{
            fontWeight: 700,

            fontSize: fontSizes[3],
            lineHeight: 1.4,
            alignSelf: "flex-start",
            transition: "color 0.2s",
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Link>
  );
};
