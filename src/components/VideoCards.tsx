import { ICommonNews } from "@/types/common";
import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";

interface Props {
  items: ICommonNews[];
}

export default function VideoCards({ items }: Props) {
  console.log(items);
  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "rgb(235, 235, 235)",
        overflow: "auto",
        maxHeight: "600px",
        py: 4,
        px: 2,
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
