import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Experience from "@/app/about/Experience";
import Others from "@/app/about/Others";

export default function About() {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        useFlexGap
        rowGap={4}
        mt={10}
        py={10}
      >
        <Box
          sx={{
            display: "inline-block",
            borderRadius: "50%",
            p: "4px",
            background:
              "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
          }}
        >
          <Avatar
            src={"/me-1.jpg"}
            sx={{
              height: "240px",
              width: "240px",
              bgcolor: "white",
            }}
          >
            JL
          </Avatar>
        </Box>

        <Box px={8} textAlign="center">
          <Typography variant="h3">Hi, I&apos;m Jason! :)</Typography>
          <Typography variant="h5" mt={2} px={4}>
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
