import { ICommonNews } from "@/types/common";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { NewsCard } from "./NewsCard";

export default function TopNewsList({ items }: { items: ICommonNews[] }) {
  return (
    <Grid container direction="column" spacing={0}>
      {items.map((item, idx) => (
        <Grid
          size={{ xs: 12 }}
          key={item.slug}
          sx={{
            display: idx < 5 ? "block" : { xs: "block", sm: "none" },
          }}
        >
          {idx == 0 && (
            <Divider
              sx={{
                my: 1,
                borderColor: "#eee",
                borderWidth: 1,
                display: { xs: "block", sm: "none" },
              }}
            />
          )}

          <NewsCard item={item} />

          <Divider
            sx={{
              my: 1,
              borderColor: "#eee",
              borderWidth: 1,
              display: {
                xs: idx === items.length - 1 ? "none" : "block",
                sm: idx === 4 ? "none" : "block",
              },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
