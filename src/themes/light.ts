import { createTheme } from "@mui/material/styles";
import { overrides } from "./overrides";

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
  components: {
    ...baseTheme.components,
    ...overrides(baseTheme),
  },
});

export default zNewsTheme;