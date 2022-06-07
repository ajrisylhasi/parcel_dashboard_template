import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light"
  },
  breakpoints: {
    values: {
      xs: 500,
      sm: 768,
      md: 992,
      lg: 1260,
      xl: 1920
    }
  }
});

export default theme;
