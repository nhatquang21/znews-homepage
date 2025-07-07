import { ICommonNews } from "@/types/common";
import { Grid, List, Paper, Typography } from "@mui/material";
import CommonNewsCard from "./CommonNewsCard";
import MostRead from "./MostRead";
import Podcast from "./Podcast";
import Promotion from "./Promotion";

async function getHighlights() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/highlights`,
    { cache: "no-store" }
  );
  return res.json();
}

async function getPopular() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/popular`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function HighlightsSection() {
  const highlights = await getHighlights();
  const popular = await getPopular();

  return (
    <Grid
      container
      spacing={4}
      sx={{
        my: 4,
      }}
    >
      <Grid
        size={{
          xs: 12,
          md: 8.5,
        }}
      >
        <Grid container direction="row" spacing={3}>
          {highlights.map((item: ICommonNews, idx: number) => (
            <CommonNewsCard key={idx} item={item} />
          ))}
        </Grid>
      </Grid>

      <Grid
        size={{
          xs: 12,
          md: 3.5,
        }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Paper elevation={0} sx={{ p: 3, border: "1px solid #eee" }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Đọc nhiều
          </Typography>
          <List>
            {popular.map((item: ICommonNews, idx: number) => (
              <MostRead key={idx} item={item} />
            ))}
          </List>
        </Paper>
        <Podcast />
        <Promotion />
      </Grid>
    </Grid>
  );
}
