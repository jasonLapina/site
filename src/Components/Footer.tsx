import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Paper
        sx={{
          borderRadius: "20px",
          py: 10,
          px: 5,
          backgroundColor: "secondary.main",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          fontSize="6rem"
          fontWeight="bold"
          fontStyle="italic"
        >
          Let&apos;s talk!
        </Typography>
        <Stack
          useFlexGap
          columnGap={2}
          mt={3}
          flexDirection="row"
          alignItems="center"
        >
          <Button variant="contained" endIcon={<LinkedIn />}>
            LinkedIn
          </Button>
          <Button variant="contained" endIcon={<Email />}>
            Email
          </Button>
        </Stack>
      </Paper>
      <Box mt={4} display="grid" gridTemplateColumns=".6fr 1fr" columnGap={5}>
        <Paper
          sx={{
            borderRadius: "20px",
            p: 5,
            backgroundColor: "secondary.main",
            color: "white",
          }}
        >
          <Typography>Made in Next.js | 2025</Typography>
        </Paper>
        <Paper
          sx={{
            borderRadius: "20px",
            p: 5,
            textAlign: "right",
            backgroundColor: "secondary.main",
            color: "white",
          }}
        >
          <Typography variant="subtitle1">
            &quot;Knowing is not enough; we must apply. Willing is not enough;
            we must do.&quot;
          </Typography>
          <Typography variant="h6" fontSize=".8rem">
            - Johann Wolfgang von Goethe
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Footer;
