"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MoreMenu from "./MoreMenu";

const menuItems = [
  { label: "Xuất bản", href: "/xuat-ban" },
  { label: "Tác giả", href: "/tac-gia" },
  { label: "Kinh doanh", href: "/kinh-doanh" },
  { label: "Thể thao", href: "/the-thao" },
  { label: "Công nghệ", href: "/cong-nghe" },
  { label: "Sức khỏe", href: "/suc-khoe" },
  { label: "Đời sống", href: "/doi-song" },
  { label: "Giải trí", href: "/giai-tri" },
];

const MenuItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "max-content",
  height: 56,
  cursor: "pointer",
  position: "relative",
  "& .menu-btn": {
    color: "#222",
    fontWeight: 700,
    textTransform: "none",
    background: "none",
    padding: 0,
    minWidth: 0,
    whiteSpace: "nowrap",
    lineHeight: 1.2,
    transition: "color 0.2s",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  "& .underline": {
    height: 3,
    width: "100%",
    borderRadius: 2,
    background: "transparent",
    marginTop: "auto",
    transition: "background 0.2s",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  "&:hover .menu-btn, &.active .menu-btn": {
    color: "#1da1f2",
  },
  "&:hover .underline, &.active .underline": {
    background: "#1da1f2",
  },
}));

export default function Header() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const pathname = usePathname();
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [closeIconIn, setCloseIconIn] = useState(false);

  const handleClick = () => {
    if (!isActivePopup) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setIsActivePopup(true);
        setShowClose(true);
        setCloseIconIn(false);
        setTimeout(() => {
          setCloseIconIn(true);
        }, 10);
      }, 200);
    } else {
      setCloseIconIn(false);
      setTimeout(() => {
        setShowClose(false);
        setIsActivePopup(false);
      }, 200);
    }
  };

  return (
    <header
      id="zing-header"
      className="sticky top-0 z-50"
      style={{
        borderBottom: "1px solid #e5e5e5",
        background: "#fff",
      }}
    >
      <div id="menu" className="page-wrapper max-w-[1100px] mx-auto">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            className="me-10"
            style={{ position: "relative", height: "40px", width: "190px" }}
          >
            <Image
              src="https://static.znews.vn/images/logo-znews-light-2.svg"
              width={0}
              height={0}
              sizes="100vh"
              style={{ height: "100%", width: "auto" }}
              alt="logo"
            />
          </div>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsActivePopup(!isActivePopup)}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: "flex", gap: 5 }}>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <MenuItem
                    key={item.label}
                    className={isActive ? "active" : ""}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      className="menu-btn"
                    >
                      {item.label}
                    </Button>
                    <div className="underline" />
                  </MenuItem>
                );
              })}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  color="inherit"
                  onClick={handleClick}
                  sx={{
                    ml: 1,
                    opacity: 0.8,
                    width: 32,
                    height: 32,
                    p: 0,
                    position: "relative",
                  }}
                  aria-label="more"
                  disableRipple
                >
                  {!isActivePopup ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 32,
                        height: 32,
                        gap: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#222",
                        }}
                      />
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#222",
                          opacity: animating ? 0.2 : 1,
                          transition: "opacity 0.2s",
                        }}
                      />
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#222",
                        }}
                      />
                    </Box>
                  ) : showClose ? (
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.4s",
                        transform: closeIconIn
                          ? "rotate(90deg)"
                          : "rotate(-90deg)",
                      }}
                    >
                      <CloseIcon fontSize="large" />
                    </Box>
                  ) : null}
                </IconButton>
              </Box>
            </Box>
          )}

          <IconButton
            color="inherit"
            sx={{ ml: 2, opacity: 0.8 }}
            disableRipple
          >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Box>
      </div>
      <div className={`category-popup ${isActivePopup ? "active" : ""}`}>
        <MoreMenu open={isActivePopup} setOpen={setIsActivePopup} />
      </div>
    </header>
  );
}
