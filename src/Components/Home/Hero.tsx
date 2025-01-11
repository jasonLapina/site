import { Box, Container } from "@mui/material";
import HeroImage from "@/Components/Home/HeroImage";
import HeroTextBox from "@/Components/Home/HeroTextBox";

const Hero = () => {
  return (
    <Box
      sx={{
        background: {
          sm: "linear-gradient(to right, white 70%, pink 30%)",
        },
      }}
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr .6fr" },
          columnGap: 10,
          alignItems: "center",
          height: { sm: "100vh", xs: "90vh" },
          justifyContent: "center",
          pt: { xs: 10, sm: 5 },
        }}
      >
        <HeroTextBox />
        <HeroImage />
      </Container>
    </Box>
  );
};

export default Hero;
