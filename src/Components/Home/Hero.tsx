import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";

const Hero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, white 70%, pink 30%)",
      }}
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr .6fr",
          columnGap: 10,
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TextBox />
        <ImageBox />
      </Container>
    </Box>
  );
};

const TextBox = () => {
  const specializations = [
    {
      text: "React",
      icon: FaReact,
      color: "cyan",
    },
    {
      text: "Next.js",
      icon: RiNextjsFill,
      color: "#010101",
    },
    {
      text: "Webflow",
      icon: FaWebflow,
      color: "#1b74f6",
    },
    {
      text: "Motion",
      icon: TbBrandFramerMotion,
      color: "#010101",
    },
  ];

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
        <Typography variant="h6" sx={{ opacity: 0.6 }}>
          *Based in the PH
        </Typography>
      </Stack>
      <Button
        component="a"
        sx={{ mt: 5 }}
        variant="contained"
        endIcon={<LinkedIn />}
        href="https://www.linkedin.com/in/dev-jason/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Let&apos;s Connect
      </Button>
      <Box mt={4}>
        <Typography variant="h5">Specializations:</Typography>
        <Stack mt={2} useFlexGap flexDirection="row" columnGap={2}>
          {specializations.map((item) => {
            const Icon = item.icon;
            return (
              <Box key={item.text}>
                <Tooltip arrow title={item.text}>
                  <Icon fontSize="40px" color={item.color} />
                </Tooltip>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

const ImageBox = () => {
  return (
    <Paper
      elevation={0}
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
