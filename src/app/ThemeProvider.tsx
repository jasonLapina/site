"use client";

import {
  createTheme,
  ThemeProvider as MuiProvider,
} from "@mui/material/styles";

const theme = createTheme();

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiProvider theme={theme}>{children}</MuiProvider>;
}
