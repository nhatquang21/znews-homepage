import { ICommonNews } from "@/types/common";
import { Box, Grid, Typography } from "@mui/material";
import NewsCard from "@/components/common/NewsCard";
import { fontSizes } from "@/themes/theme.config";

const categories = ["Tin ảnh", "Tin video"];

export default async function RecentlyNews() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/highlights`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
        my: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "var(--hover-title)",
            fontWeight: 600,
            fontSize: fontSizes[6],
            textTransform: "uppercase",
          }}
        >
          Mới nhất
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: fontSizes[1],
            color: "#888",
          }}
        >
          <span style={{ whiteSpace: "pre" }}>{categories.join("  ")}</span>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data.map((item: ICommonNews) => (
          <Grid
            size={{
              xs: 12,
            }}
            key={item.slug}
          >
            <NewsCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
