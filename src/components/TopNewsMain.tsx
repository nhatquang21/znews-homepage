import { ITopNewsMain } from "@/types/topNews";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { fontSizes } from "@/themes/theme.config";

export default function TopNewsMain({ main }: { main: ITopNewsMain }) {
  return (
    <Box sx={{ mb: 2, cursor: "default", pointerEvents: "none" }}>
      <Link href={`/${main.slug}`} style={{ textDecoration: "none" }}>
        <Image
          src={main.image}
          alt={main.title}
          width={800}
          height={450}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            maxHeight: 400,
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mt: 2,
            fontSize: {
              xs: fontSizes[5],
              sm: fontSizes[7],
            },
            lineHeight: 1.2,
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        >
          {main.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 1,
            color: "#444",
            fontSize: fontSizes[1],
            lineHeight: 1.5,
            display: { xs: "none", sm: "block" },
          }}
        >
          {main.desc}
        </Typography>
        </Link>
        {main.bullet && (
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              cursor: "default",
              pointerEvents: "none",
            }}
          >
            <ul
              style={{ marginTop: 8, paddingLeft: 18, listStyleType: "disc" }}
            >
              {main.bullet.map((b, i) => (
                <li
                  key={i}
                  style={{ fontWeight: "bold", fontSize: fontSizes[2] }}
                >
                  <Link href={`/${b.slug}`} style={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mt: { xs: 1, sm: 0 },
                        fontSize: { xs: fontSizes[1], sm: fontSizes[2] },
                        lineHeight: 1.4,
                        alignSelf: "flex-start",
                        transition: "color 0.2s",
                        cursor: "pointer",
                        pointerEvents: "auto",
                      }}
                    >
                      {b.title}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        )}
     
    </Box>
  );
}
