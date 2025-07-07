import { ICommonNews } from "@/types/common";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { fontSizes } from "@/themes/theme.config";
import { Divider, Grid } from "@mui/material";
import NewsCard from "./NewsCard"; 

export default function TopNewsSide({ items }: { items: ICommonNews[] }) {
  return (
    <Grid
      container
      spacing={{
        xs: 0,
        sm: 2,
      }}
    >
      {items.map((item) => (
        <Grid size={{ xs: 12 }} key={item.slug}>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Divider sx={{ my: 1, borderColor: "#eee", borderWidth: 1 }} />
            <NewsCard item={item} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href={`/${item.slug}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                className="highlight-title"
                sx={{
                  
                  fontWeight: 700,
                  fontSize: { xs: fontSizes[3], sm: fontSizes[3] },
                  lineHeight: 1.3,
                  mt: 1,
                 
                }}
              >
                {item.title}
              </Typography>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
