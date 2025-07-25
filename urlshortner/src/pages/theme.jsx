import { createTheme } from "@mui/material";
const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          "&::before": {
            display: "none",
          },
        },
      },
    },
  },
});
export default theme;