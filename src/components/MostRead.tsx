import { fontSizes } from "@/themes/theme.config";
import { ICommonNews } from "@/types/common";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function MostRead({ item }: { item: ICommonNews }) {
  return (
    <Link
      href={`/${item.slug}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          display: "flex",
          boxShadow: "none",
          borderRadius: 0,
          alignItems: "flex-start",
          cursor: "pointer",
          transition: "background 0.2s",
          '&:hover .mostread-title': {
            color: "var(--hover-title)",
          },
          
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 56,
            height: 56,
            flexShrink: 0,
            borderRadius: 1,
            overflow: "hidden",
            mt: 1,
            ml: 1,
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </Box>
        <CardContent sx={{ p: 1, pl: 2, pb: '8px !important', pt: 0 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textTransform: "uppercase", fontWeight: 500 }}
          >
            {item.category}
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            fontWeight={700}
            className="mostread-title"
            sx={{
              fontSize: fontSizes[2],
              transition: "color 0.2s",
              mt: 0.5,
              lineHeight: 1.2,
            }}
          >
            {item.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}