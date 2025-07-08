import { Box, Typography, Divider, Grid } from "@mui/material";
import TopNewsList from "@/components/common/TopNewsList";
import TopNewsMain from "@/components/common/TopNewsMain";
import TopNewsSide from "@/components/common/TopNewsSide";

import { ITopNewsMain } from "@/types/topNews";
import { fontSizes } from "@/themes/theme.config";

export default async function BusinessSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`, {
    cache: "no-store",
  });
  const data: ITopNewsMain[] = await res.json();
  const mainData = data[0];
  const sideData = data.slice(1, 3);
  const listData = data.slice(3);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        my: 3,
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: fontSizes[5],
            marginBottom: 2,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box
            component="span"
            sx={{
              display: { xs: "none", sm: "inline-block" },
              width: 4,
              height: fontSizes[4],
              backgroundColor: "#dd3333",
              transform: "skew(-20deg)",
              verticalAlign: "middle",
              marginRight: 1.5,
            }}
          />
          BUSINESS
        </Typography>
      </Box>
      <Divider sx={{ mb: 4, borderColor: "#eee", borderWidth: 1 }} />
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1 }}>
          <TopNewsMain main={mainData} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} order={{ xs: 2 }}>
          <TopNewsSide items={sideData}  />
        </Grid>
       
        <Grid size={{ xs: 12, md: 4 }} order={{ xs: 3 }}>
        
          <TopNewsList items={listData} reverse={true} />
        </Grid>
      </Grid>
    </Box>
  );
}
