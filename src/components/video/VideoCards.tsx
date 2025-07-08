import { ICommonNews } from "@/types/common";
import { Grid } from "@mui/material";
import NewsCard from "@/components/common/NewsCard";

interface Props {
  items: ICommonNews[];
}

export default function VideoCards({ items }: Props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "rgb(235, 235, 235)",
        overflow: "auto",
        maxHeight: "600px",
       p:2
      }}
    >
      {items.map((item) => (
        <Grid size={{ xs: 12 }} key={item.slug}>
          <NewsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
