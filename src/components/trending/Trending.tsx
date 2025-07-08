import { fontSizes } from "@/themes/theme.config";
import { ICommonNews } from "@/types/common";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export function TrendingCard({ item }: { item: ICommonNews }) {
  return (
    <Box display="flex" gap={2} flexDirection="column">
      <Box
        sx={{
          position: "relative",
          width: '100%',
          height: 100,
          flexShrink: 0,
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
      <Typography variant="body2" color="text.secondary" fontWeight={600} sx={{
        color: 'black'
      }}>
        {item.title}
      </Typography>
    </Box>
  );
}

export default async function TrendingSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`, {
    cache: "no-store",
  });
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
      <Typography
        variant="h6"
        sx={{
          color: "var(--hover-title)",
          fontWeight: 600,
          fontSize: fontSizes[6],
          marginBottom: 2,
          textTransform: "uppercase",
        }}
      >
        Trending
      </Typography>
      <Grid container spacing={2} width="100%">
        {data.map((item: ICommonNews) => (
          <Grid size={{ xs: 6 }} key={item.slug}>
            <TrendingCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
