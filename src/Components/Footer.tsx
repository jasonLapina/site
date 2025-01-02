import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Box
        sx={{
          backgroundColor: "purple",
          borderRadius: "20px",
          py: 10,
          px: 5,
        }}
      >
        <Typography fontSize="6rem" fontWeight="bold" fontStyle="italic">
          LET&apos;S TALK!
        </Typography>
        <Stack useFlexGap columnGap={2} mt={3} flexDirection="row">
          <Button variant="contained" endIcon={<LinkedIn />}>
            LinkedIn
          </Button>
          <Button variant="contained" endIcon={<Email />}>
            Email
          </Button>
        </Stack>
      </Box>
      <Stack flexDirection="row" mt={4} columnGap={4}>
        <Box sx={{ backgroundColor: "purple", borderRadius: "20px", p: 5 }}>
          <Typography>
            “Try to create. I want to tell people to create. Just start by
            creating your day. Then create your life.”
          </Typography>
          <Typography>- Prince, The Beautiful Ones</Typography>
        </Box>
        <Box sx={{ backgroundColor: "red", borderRadius: "20px", p: 5 }}>
          <Typography>
            Jason Alexander Lapina. Developer. Problem Solver
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Footer;
