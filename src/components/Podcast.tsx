import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import Image from "next/image";
import { ICommonNews } from "@/types/common";
import { fontSizes } from "@/themes/theme.config";
import Link from "next/link";

async function getPodcasts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/podcasts`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Podcast() {
  const podcasts = await getPodcasts();

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #3a3a5d 0%, #23233a 100%)",
        p: 4,
        color: "#fff",
        mx: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
            position: "absolute",
            top: 0,
            left: 0,
          width: "100%",
          height: 150,
          backgroundImage: `url(${podcasts[0].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(30,30,60,0.4)",
            backdropFilter: "blur(12px)",
            zIndex: 1,
          }}
        />
      </Box>

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 1,
            width: 150,
            height: 50,
          }}
        >
          <Image
            src="https://static.znews.vn/images/logo_podcast_white.png"
            alt="podcast"
            fill
            style={{ objectFit: "contain", transform: "translateX(40%)" }}
          />
        </Box>

        {podcasts[0] && (
          <Card
            sx={{
              background: "transparent",
              boxShadow: "none",
              mb: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 160,
                overflow: "hidden",
              }}
            >
              <Image
                src={podcasts[0].image}
                alt={podcasts[0].title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
            <CardContent sx={{ p: 0, pt: 1 }}>
                <Link href={`/${podcasts[0].slug}`}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: fontSizes[3],
                  lineHeight: 1.3,
                  zIndex: 2,
                  textAlign: "center",
                  "&:hover": {
                    color: "#04b2f7",
                  },
                }}
              >
                {podcasts[0].title}
              </Typography>
              </Link>
            </CardContent>
          </Card>
        )}

        {podcasts.slice(1).map((item: ICommonNews, idx: number) => (
          <div key={idx}>
            <Divider
              sx={{
                my: 2,
                borderColor: "gray",
                borderWidth: 0.5,
              }}
            />

            <Card
              sx={{
                display: "flex",
                alignItems: "flex-start",
                background: "transparent",
                boxShadow: "none",
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 60,
                  height: 60,
                  overflow: "hidden",
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
              <CardContent sx={{ p: 0, pl: 2 }}>
                <Link href={`/${item.slug}`}>   
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    fontSize: fontSizes[1],
                    lineHeight: 1.3,
                    "&:hover": {
                      color: "#04b2f7",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </Box>
    </Box>
  );
}
