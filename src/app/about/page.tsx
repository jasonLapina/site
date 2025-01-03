import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import Experience from "@/app/about/Experience";
import Others from "@/app/about/Others";

export default function About() {
  return (
    <Container>
      <Stack
        sx={{ height: "60vh" }}
        alignItems="center"
        justifyContent="center"
        useFlexGap
        rowGap={4}
        mt={10}
      >
        <Avatar sx={{ height: "120px", width: "120px" }}>JL</Avatar>

        <Box px={8} textAlign="center">
          <Typography variant="h3">Hi, I'm Jason! :)</Typography>
          <Typography variant="h5" mt={2}>
            A product designer with 6+ YOE building products across Fintech,
            Social Media, Healthcare, AI and Aviation. Expert in design systems
            and accessibility-focused design.
          </Typography>
        </Box>
      </Stack>

      <Stack>
        <Experience />
        <Others />
      </Stack>
    </Container>
  );
}
