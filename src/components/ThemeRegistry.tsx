"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import zNewsTheme from "@/themes/light";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={zNewsTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
