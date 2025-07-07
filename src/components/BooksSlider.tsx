"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import { ICommonNews } from "@/types/common";
import { fontSizes } from "@/themes/theme.config";
import Divider from "@mui/material/Divider";

interface Props {
  books: ICommonNews[];
}

const GAP = 16;
const CARD_WIDTH = 210;
const VISIBLE = 5;
const ARROW_SIZE = 34;

export default function BooksSlider({ books }: Props) {
  const [start, setStart] = useState(0);

  const maxStart = Math.max(0, books.length - VISIBLE);

  const canPrev = start > 0;
  const canNext = start < maxStart;

  const iconBtnSx = {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 100,
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    border: "1px solid #ddd",
    background: "white !important",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    p: 0,
    "&:hover": {
      background: "#f5f5f5",
    },
  };

  return (
    <Box sx={{ position: "relative", width: "100%", my: 3, display: {
      xs: "none",
      sm: "block"
    } }}>
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
          BOOKS
        </Typography>
      </Box>
      <Divider sx={{ mb: 4, borderColor: "#eee", borderWidth: 1 }} />
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() => setStart((s) => Math.max(0, s - VISIBLE))}
          disabled={!canPrev}
          sx={{
            ...iconBtnSx,
            left: 0,
            transform: "translate(-50%, -50%)", 
            cursor: !canPrev ? "not-allowed" : "pointer"
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: fontSizes[4], color: canPrev ? "#333" : "#bbb" }} />
        </IconButton>

        <Box
          sx={{
            overflow: "hidden",
            flex: 1,
          
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: `${GAP}px`,
              transition: "transform 0.4s cubic-bezier(.4,0,.2,1)",
              transform: `translateX(-${start * (CARD_WIDTH + GAP)}px)`,
              willChange: "transform",
              minWidth: `${VISIBLE * (CARD_WIDTH + GAP)}px`, 
            }}
          >
            {books.map((book) => (
              <Card
                key={book.slug}
                sx={{
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                  flex: `0 0 ${CARD_WIDTH}px`,
                  border: "1px solid #eee",
                  boxShadow: "none",
                  overflow: "hidden",
                
                }}
              >
                <Link href={`/${book.slug}`} style={{ textDecoration: "none" }}>
                  <CardMedia
                    component="img"
                    image={book.image}
                    alt={book.title}
                    sx={{ height: 120, objectFit: "cover" }}
                  />
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#222",
                        fontWeight: 600,
                        fontSize: fontSizes[2],
                        lineHeight: 1.3,
                        "&:hover": {
                          color: "var(--hover-title)",
                        },
                      }}
                    >
                      {book.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>
        </Box>

        <IconButton
          onClick={() => setStart((s) => Math.min(maxStart, s + VISIBLE))}
          disabled={!canNext}
          sx={{
            ...iconBtnSx,
            right: 0,
            transform: "translate(50%, -50%)", 
            cursor: !canNext ? "not-allowed" : "pointer"
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: fontSizes[4], color: canNext ? "#333" : "#bbb" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
