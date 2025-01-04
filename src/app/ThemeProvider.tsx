"use client";

import {
  createTheme,
  ThemeProvider as MuiProvider,
} from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: {
      main: "#F8F8F8",
    },
  },
  typography: {
    h1: generateHeadingStyles("2.5rem"),
    h2: generateHeadingStyles("2rem"),
    h3: generateHeadingStyles("1.75rem"),
    h4: generateHeadingStyles("1.5rem"),
    h5: generateHeadingStyles("1.25rem"),
    h6: generateHeadingStyles("1rem"),
  },
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiProvider theme={theme}>{children}</MuiProvider>;
}

function generateHeadingStyles(fontSize: string) {
  return {
    fontWeight: "bold",
    fontSize,
    backgroundImage:
      "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}
