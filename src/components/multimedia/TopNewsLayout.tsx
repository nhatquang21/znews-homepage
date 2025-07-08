import { Grid } from "@mui/material";
import { ITopNewsData } from "@/types/topNews";
import TopNewsList from "@/components/common/TopNewsList";
import TopNewsMain from "@/components/common/TopNewsMain";
import TopNewsSide from "@/components/common/TopNewsSide";

export default async function TopNewsLayout() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topNews`, {
    cache: "no-store",
  });
  const data: ITopNewsData = await res.json();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }} order={{ xs: 3, md: 1 }}>
        <TopNewsList items={data.left} />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
        <TopNewsMain main={data.main} />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }} order={{ xs: 2, md: 3 }}>
        <TopNewsSide items={data.right} />
      </Grid>
    </Grid>
  );
}
