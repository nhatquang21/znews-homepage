import { fontSizes } from "@/themes/theme.config";
import { ICommonNews } from "@/types/common";
import { Box, Grid, Typography } from "@mui/material";
import MainVideoCard from "./MainVideoCard";
import VideoCards from "./VideoCards";

export default async function VideoSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/video`, {
    cache: "no-store",
  });
  const data: ICommonNews[] = await res.json();

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
          VIDEO
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8.5 }}>
            <MainVideoCard data={data[0]} />
        </Grid>
        <Grid size={{ xs: 12, md: 3.5 }}>
            <VideoCards items={data} />
        </Grid>

      </Grid>
   
    </Box>
  );
}
