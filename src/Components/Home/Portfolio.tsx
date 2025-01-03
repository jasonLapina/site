import { Box, Container, Typography } from "@mui/material";

const dummy = Array.from({ length: 6 });

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
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        mt={6}
        columnGap={3}
        rowGap={6}
      >
        {dummy.map((item, i) => {
          return (
            <Box key={i}>
              <Box
                component="img"
                src={
                  "https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/6511becc5d4ae9d9c135d5c8_Sims%204%20Thumbnail-p-800.png"
                }
                sx={{
                  outline: "double red",
                  width: "100%",
                  borderRadius: "20px",
                  mb: 1,
                }}
              />

              <Typography variant="h6">Customer UX & Game UI</Typography>
              <Typography variant="h4">Sims 4 Fan UI Redesign</Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Portfolio;
