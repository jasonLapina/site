"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";
import { useRef } from "react";
import { useInView } from "motion/react";

const Footer = () => {
  const matches = useMediaQuery("(max-width:779px)");

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 1, once: true });

  return (
    <Container sx={{ mt: 20 }}>
      <Paper
        ref={ref}
        sx={{
          borderRadius: "20px",
          py: 10,
          px: 5,
          backgroundColor: "secondary.main",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h2"
          fontSize={{ xs: "5rem", sm: "6rem" }}
          fontWeight="bold"
          fontStyle="italic"
          sx={{
            transition: "all .4s",
            transformOrigin: "left",
            transform: !inView ? "rotate(-20deg)" : "rotate(0)",
            opacity: !inView ? 0 : 1,
          }}
        >
          Let&apos;s talk!
        </Typography>
        <Stack
          useFlexGap
          columnGap={2}
          mt={3}
          flexDirection="row"
          alignItems="center"
          sx={{
            transition: "all .4s",
            transform: !inView ? "translateY(100px)" : "translateY()",
            opacity: !inView ? 0 : 1,
          }}
        >
          <Button
            variant="contained"
            endIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/dev-jason/"
            target="_blank"
            rel="noreferrer noopener"
            component="a"
          >
            Let&apos;s Connect
          </Button>
          <Button
            variant="contained"
            endIcon={<Email />}
            href="mailto:lapina.jason@gmail.com"
            component="a"
          >
            Email
          </Button>
        </Stack>

        {!matches && (
          <Box
            component="img"
            src="/calling.svg"
            sx={{
              position: "absolute",
              top: "0",
              right: "-320px",
              transform: !inView ? "translateX(100px)" : "translateX(0)",
              transition: "all .4s ",
              opacity: !inView ? 0 : 1,
              filter: (theme) =>
                `drop-shadow(10px 10px ${theme.palette.primary.light})`,
            }}
          />
        )}
      </Paper>
      <Box
        mt={4}
        display={{ sm: "grid", xs: "flex" }}
        gridTemplateColumns=".6fr 1fr"
        columnGap={5}
        flexDirection="column-reverse"
        rowGap={2}
      >
        <Paper
          sx={{
            borderRadius: "20px",
            p: 5,
            backgroundColor: "secondary.main",
            color: "white",
          }}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            useFlexGap
            columnGap={2}
            sx={{
              transition: "all .4s",
              transform: !inView ? "translateX(-100px)" : "translateX()",
              opacity: !inView ? 0 : 1,
            }}
          >
            <Box component="img" src="/logo.png" sx={{ width: "80px" }} />
            <Typography>Made in Next.js | 2025</Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            borderRadius: "20px",
            p: 5,
            textAlign: "right",
            backgroundColor: "secondary.main",
            color: "white",
            transition: "all .4s",
            transform: !inView ? "translateX(100px)" : "translateX()",
            opacity: !inView ? 0 : 1,
          }}
        >
          <Typography variant="subtitle1">
            &quot;Knowing is not enough; we must apply. Willing is not enough;
            we must do.&quot;
          </Typography>

          <Typography variant="h6" fontSize="1.2rem">
            - Johann Wolfgang von Goethe
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Footer;
