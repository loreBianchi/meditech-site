import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
        light: '#a7e4fa',
        main: '#72c8e8',
        dark: '#0e9ccf',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#4D7EE6',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
});

theme = responsiveFontSizes(theme);

export default theme;