import { ICommonNews } from "@/types/common";
import { Box, Grid } from "@mui/material";
import { Card } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { fontSizes } from "@/themes/theme.config";
import { CardContent, Typography } from "@mui/material";

export default function CommonNewsCard({ item }: { item: ICommonNews }) {
  return (
    <Grid key={item.slug}>
      <Card
        sx={{
          display: "flex",
          boxShadow: "none",
          borderRadius: 0,
          cursor: "default",
          pointerEvents: "none",
        }}
      >
        <Link
          href={`/${item.slug}`}
          style={{ textDecoration: "none", display: "flex" }}
        >
          <Box
            sx={{
              position: "relative",
              width: 250,
              height: 150,
              flexShrink: 0, 
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{
                objectFit: "cover",
                borderRadius: 0,
              }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
            <CardContent sx={{ flex: "1 0 auto", p: 0 }}>
              <Typography
                component="div"
                variant="h6"
                fontWeight={700}
                gutterBottom
                className="highlight-title"
                sx={{
                  fontSize: fontSizes[4],
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
                sx={{ cursor: "default", pointerEvents: "none" }}
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Box>
        </Link>
      </Card>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }} />
    </Grid>
  );
}
