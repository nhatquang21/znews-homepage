import { createTheme } from "@mui/material/styles";


const zNewsTypography = {
  fontFamily: 'var(--font-body)',
  h1: { fontWeight: 700 },
  h2: { fontWeight: 700 },
};

const baseTheme = createTheme({
  typography: zNewsTypography,
  spacing: 5
});

const zNewsTheme = createTheme({
  ...baseTheme,
  
});

export default zNewsTheme;