"use client";

import {
  createTheme,
  ThemeProvider as MuiProvider,
} from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { css, Global } from "@emotion/react";

const globalStyles = css`
  ::selection {
    background-color: #ffcc00;
    color: #000;
  }
`;

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none" },
        contained: generateButtonStyles(),
        outlined: generateButtonStyles(),
      },
    },
  },
  palette: {
    primary: pink,
    secondary: {
      main: "#010101",
    },
  },
  typography: {
    body2: {
      opacity: 0.7,
    },
    h1: { ...generateHeadingStyles(), fontSize: "8rem" },
    h2: generateHeadingStyles(),
    h3: generateHeadingStyles(),
    h4: generateHeadingStyles(),
    h5: generateHeadingStyles(),
    h6: { ...generateHeadingStyles(), fontSize: "1rem" },
  },
});
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Global styles={globalStyles} />
      <MuiProvider theme={theme}>{children}</MuiProvider>
    </>
  );
}

function generateHeadingStyles() {
  return {
    fontWeight: "bold",
    backgroundImage:
      "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
    "&::selection": {
      background: "#ffcc00",
      WebkitTextFillColor: "black",
    },
  };
}

function generateButtonStyles() {
  return {
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
  };
}
