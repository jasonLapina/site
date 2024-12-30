import { Box, Container, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Container>
      <Box width="50%">
        <Typography variant="h2">PORTFOLIO</Typography>
        <Typography variant="h4" mt={4}>
          Take a look at some of my work!
        </Typography>
        <Typography mt={2}>
          Explore experiences crafted with precision and passion, aimed at
          delivering seamless experiences that are always fun and effective.
        </Typography>
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr"></Box>
    </Container>
  );
};

export default Portfolio;
