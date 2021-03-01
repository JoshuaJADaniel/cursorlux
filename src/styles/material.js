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
    fontSize: 13,
    fontWeightRegular: 500,
    fontFamily: ["'Comfortaa'", "sans-serif"].join(","),
    button: {
      fontSize: 14,
      fontWeight: 700,
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
