import {
  Avatar,
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
      <Typography variant="h1">Hi, I&apos;m Jason!</Typography>
      <Stack useFlexGap rowGap={2} mt={3}>
        <Typography variant="h5">
          I&apos;m a <strong>full-stack developer</strong> that&apos;s ready to
          help you bring your ideas to life!
        </Typography>
        <Typography variant="h5">
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
    <Paper sx={{ borderRadius: "20px", p: 1, pb: 2 }}>
      <Stack alignItems="center" height="100%">
        <Box
          sx={{
            borderRadius: "20px",
          }}
          width="90%"
          component="img"
          src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/457147778_122171400440220295_7344864173905177287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFfBibAgXwzQnOb2ptsieQJNgmZhxQvBoc2CZmHFC8Gh8oIVWsKMu7MRlFnCmlSw0SuGYa6HOdl7SBgvOfhPSzl&_nc_ohc=ZqJH-pqg_7sQ7kNvgFA8cfe&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=AdZ9QcGDSWAus5rA_2OSPTD&oh=00_AYCiYN1_IqMKpwIVg-qru8RfaKaU8X5PgCgEUTbN2UO_CA&oe=6778513E"
        />
        <Stack sx={{ textAlign: "center", mt: 3 }} useFlexGap rowGap={1}>
          <Typography variant="h5"> Jason Lapina </Typography>
          <Typography variant="h6"> Web Developer </Typography>
          <Typography variant="subtitle">
            "I do what I do for the love of it"
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Hero;
