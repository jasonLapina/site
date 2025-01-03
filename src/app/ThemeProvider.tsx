"use client";

import {
  createTheme,
  ThemeProvider as MuiProvider,
} from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ee7d8f",
    },
    secondary: purple,
  },
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiProvider theme={theme}>{children}</MuiProvider>;
}
