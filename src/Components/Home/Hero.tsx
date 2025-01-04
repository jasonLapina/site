import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

const Hero = () => {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr .6fr",
        columnGap: 10,
        alignItems: "center",
        height: "90vh",
      }}
    >
      <TextBox />
      <ImageBox />
    </Container>
  );
};

const TextBox = () => {
  return (
    <Box>
      <Typography variant="h2">Hi, I&apos;m Jason!</Typography>
      <Stack useFlexGap rowGap={2} mt={3}>
        <Typography>
          I&apos;m a <strong>full-stack developer</strong> that&apos;s ready to
          help you bring your ideas to life!
        </Typography>
        <Typography>
          UI Developer @{" "}
          <Link href="https://www.lemongrasscloud.com/">Lemongrass Cloud</Link>
        </Typography>
      </Stack>
      <Button sx={{ mt: 5 }} variant="contained" endIcon={<LinkedIn />}>
        Let&apos;s Connect
      </Button>
    </Box>
  );
};

const ImageBox = () => {
  return (
    <Paper
      sx={{
        borderRadius: "20px",
        p: 2,
      }}
    >
      <Stack alignItems="center" height="100%">
        <Box
          sx={{
            borderRadius: "20px",
          }}
          width="100%"
          component="img"
          src="/Laps_artwork1.jpg"
        />
        <Stack sx={{ textAlign: "center", mt: 3 }} useFlexGap rowGap={1}>
          <Typography variant="h6"> Jason Lapina </Typography>
          <Typography variant="h5"> Web Developer </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            &quot;I do what I do for the love of it&quot;
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Hero;
