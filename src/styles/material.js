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
    fontFamily: ["'Comfortaa'", "sans-serif"].join(","),
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        "&$checked": {
          color: colors.primary,
        },
      },
    },
  },
});

export default material;
