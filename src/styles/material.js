import { createMuiTheme } from "@material-ui/core/styles";
import colors from "styles/material.module.scss";

const material = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    fontWeightRegular: 700,
    fontFamily: ["'Comfortaa'", "sans-serif"].join(","),
    body1: {
      fontSize: 14,
    },
    button: {
      fontSize: 15,
      textTransform: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: -1,
      md: -1,
      lg: -1,
      xl: -1,
    },
  },
});

export default material;
