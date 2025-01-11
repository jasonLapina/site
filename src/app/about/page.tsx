import { Box, Container, Stack, Typography } from "@mui/material";
import Experience from "@/app/about/Experience";
import Others from "@/app/about/Others";
import AboutHero from "@/app/about/AboutHero";

export default function About() {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        useFlexGap
        rowGap={4}
        mt={{ sm: 10, xs: 2 }}
        py={10}
      >
        <AboutHero />

        <Box px={{ md: 8, sm: 1 }} textAlign="center">
          <Typography variant="h3">Hi, I&apos;m Jason! :)</Typography>
          <Typography variant="h5" mt={2} px={{ sm: 4, xs: 1 }}>
            A web developer with 2+ years of experience building products in
            web-based game development, marketing, and enterprise software.
            Skilled in creating scalable solutions and collaborating with
            top-tier teams.
          </Typography>
        </Box>
      </Stack>

      <Stack useFlexGap rowGap={10}>
        <Experience />
        <Others />
      </Stack>
    </Container>
  );
}
