import { fontSizes } from "@/themes/theme.config";
import { ICommonNews } from "@/types/common";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const promotionImage =
  "https://photo.znews.vn/w480/Uploaded/pqh_fdgzszf4/2025_04_26/trungnguyen_bg.jpg";

async function getPromotions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/promotions`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function Promotion() {
  const promotions = await getPromotions();

  return (
    <Box
      sx={{
        backgroundImage: `url(${promotionImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        p: 4,
        color: "#fff",
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        height: 600,
        width: "100%",
        zIndex: 0,
        paddingTop: "45%",
      }}
    >
      <Link href={promotions[0].slug}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 180,
            borderRadius: 3,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
          }}
        >
          <Image
            src={promotions[0].image}
            alt="promotion"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 300,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            color: "#fff",
            fontSize: fontSizes[1],
            lineHeight: 1.3,
            zIndex: 2,
            width: "80%",
          }}
        >
          {promotions[0].title}
        </Typography>
      </Link>
      <Grid container spacing={2} sx={{ width: "100%", mt: 2 }}>
        {promotions.slice(1).map((item: ICommonNews, idx: number) => (
          <Grid size={{
            xs: 6,
          }} key={idx} 
          >
            <Link href={item.slug} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  width: '100%',
                  height: 100,
                  overflow: "hidden",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: fontSizes[1],
                  color: 'black',
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.title}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
