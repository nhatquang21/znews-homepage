import { fontSizes } from "@/themes/theme.config";
import { Box, Divider, Grid, Typography } from "@mui/material";
import TopNewsMain from "@/components/common/TopNewsMain";
import Image from "next/image";
import { ICommonNews } from "@/types/common";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ITopNewsMain } from "@/types/topNews";

export default function NewsWithSeeMore({
  data,
  title,
  color,
  categories,
}: {
  data: ITopNewsMain[];
  title: string;
  color: string;
  categories: string[];
}) {
  const randomTwo = [...data].sort(() => 0.5 - Math.random()).slice(0, 2);
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
          {title}
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
      <Grid container spacing={2} width="100%">
        <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
          <TopNewsMain main={data[Math.floor(Math.random() * data.length)]} />
        </Grid>
        {randomTwo.map((item: ICommonNews) => (
          <Grid
            size={{ xs: 6, md: 3 }}
            order={{ xs: 2, md: 3 }}
            key={item.slug}
          >
            <Box display="flex" gap={2} flexDirection="column">
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
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
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}
                sx={{
                  color: "black",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 2, borderColor: "#eee", borderWidth: 1 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          gap: 1,
          cursor: "pointer",
          py: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#888", fontWeight: 400, letterSpacing: 1 }}
        >
          XEM THÊM
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: color, fontWeight: 700, letterSpacing: 1 }}
        >
          {title.toUpperCase()}
        </Typography>
        <ArrowForwardIosIcon sx={{ fill: color, fontSize: fontSizes[4] }} />
      </Box>
    </Box>
  );
}
