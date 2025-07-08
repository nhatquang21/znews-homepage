import { fontSizes } from "@/themes/theme.config";
import { ICategory } from "@/types/category";
import { Box, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/common/NewsCard";

export default function CategoryCard({ item }: { item: ICategory }) {
  const mainNews = item.news[0];
  const restNews = item.news.slice(1);

  return (
    <Grid
      container
      spacing={{
        xs: 0,
        sm: 2,
      }}
    >
      <Grid size={{ xs: 12 }}>
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
            {item.name}
          </Typography>
          
        </Box>
       

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link href={`/${mainNews.slug}`} style={{ textDecoration: "none" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
               
              }}
            >
              <Image
                src={mainNews.image}
                alt={mainNews.title}
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
                fontWeight: 600,
                fontSize: { xs: fontSizes[3], sm: fontSizes[3] },
                lineHeight: 1.3,
                mt: 1,
                height: 50,
              }}
            >
              {mainNews.title}
            </Typography>
          </Link>
          <Divider sx={{ mt: 6, mb: 2, borderColor: "#eee", borderWidth: 1 }} />
        </Box>

        <Grid size={{ xs: 12 }} sx={{ my: 2 }} container spacing={2}>
          {restNews.map((news, idx) => (
            <Grid size={{ xs: 12 }} key={idx}>
              <NewsCard item={news} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
