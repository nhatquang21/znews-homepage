"use client";
import { fontSizes } from "@/themes/theme.config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Fade from "@mui/material/Fade";
import { Divider, useMediaQuery } from "@mui/material";
import Footer from "./Footer";

const moreCategories = [
  [
    "Xuất bản",
    "Tác giả",
    "Thế giới sách",
    "Cuốn sách tôi đọc",
    "Nghiên cứu",
  ],
  ["Kinh doanh", "Sức khỏe", "Du lịch", "Văn hóa đọc", "Pháp luật"],
  ["Công nghệ", "Đời sống", "Giải trí", "Lifestyle", "Xã hội"],
  ["Thể thao", "Xe", "Cải chính", "Giáo dục", "Thế giới"],
];

const bottomMenuImageUrls = [
  "https://static.znews.vn/images/channels/podcast_logo_white.svg",
  "https://static.znews.vn/images/channels/longform-logo-white_1.svg",
  "https://static.znews.vn/images/channels/story-logo-white.svg",
  "https://static.znews.vn/images/channels/lens-logo-white_1.svg",
];

const HEADER_HEIGHT = 55;

export default function MoreMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {open && (
        <Box
          onClick={() => setOpen(false)}
          sx={{
            position: "fixed",
            zIndex: 1299,
            top: HEADER_HEIGHT, 
            left: 0,
            width: "100vw",
            height: isMobile ? '100vh' : `calc(100vh - ${HEADER_HEIGHT}px)`,
            bgcolor: "rgba(0,0,0,0.2)",
          }}
        />
      )}
      <Fade in={open} timeout={300} unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            top: {
              xs: 35,
              md: HEADER_HEIGHT,
            },
            
            left: 0,
            width: "100vw",
            backgroundColor: {
              xs: 'rgb(246, 246, 246)',
              md: '#141329',
            },
            height: isMobile ? '100%' : 'auto',
            py: {
              xs: 4,
              md: 0,
            },
           
            color: "#fff",
            zIndex: 1300,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Box
            sx={{
              position: "relative",
              p: 2,
              maxWidth: 865,
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
                gap: 2,
                mt: {
                  xs: 4,
                  md: 2,
                },
                width: "100%",
                justifyItems: {
                  xs: "center",
                  sm: "flex-start",
                },
                px: { xs: 2, sm: 0 },
                py: { xs: 4, sm: 0 },
              }}
            >
              {moreCategories.flat().map((cat) => (
                <Typography
                  key={cat}
                  component={Link}
                  href={`/${cat.toLowerCase().replace(/\s/g, "-")}`}
                  sx={{
                    color: {
                      xs: '#444444',
                      md: '#DDDDDD',
                    },
                    fontWeight: {
                      xs: 400,
                      md: 600,
                    },
                    fontSize: fontSizes[3],
                    textDecoration: "none",
                    marginBottom: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      width: 4,
                      height: 12,
                      backgroundColor: "#dd3333",
                      transform: "skew(-20deg)",
                      verticalAlign: "middle",
                      marginRight: 1.5,
                    }}
                  />
                  {!isMobile ? cat : cat.toUpperCase()}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid #333",
              background: "#2e2e42",
              justifyContent: { xs: "flex-start", sm: "space-around" },
              alignItems: "center",
              padding: "15px 0",
              px: { xs: 0, sm: 60 },
              flexWrap: "wrap",
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {bottomMenuImageUrls.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "50%", sm: "auto" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: { xs: 1, sm: 0 },
                  padding: { xs: "10px 20px", sm: 0 },
                  cursor: "pointer",
                }}
              >
                <Image
                  src={item}
                  alt={item}
                  width={index === 2 || index === 3 ? 50 : 100}
                  height={index === 2 || index === 3 ? 70 : 100}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{
            display: {
              xs: 'flex',
              md: 'none'
            },
            
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
          
          
          }}>
            <Divider sx={{
              borderColor: '#eee',
              borderWidth: 1,
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              margin: '0 auto'
            }} />
            <Footer />
          </Box>
        </Box>
      </Fade>
    </>
  );
}
