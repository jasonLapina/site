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
    <Container sx={{ mt: 20 }}>
      <Paper
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

        <Box
          component="img"
          src="/calling.svg"
          sx={{
            position: "absolute",
            top: "0",
            right: "-320px",
          }}
        />
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
          <Stack
            flexDirection="row"
            alignItems="center"
            useFlexGap
            columnGap={2}
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
