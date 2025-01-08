import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import HeroImage from "@/Components/Home/HeroImage";

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
        <TextBox />
        <HeroImage />
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
    <Box
      sx={{
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Typography variant="h2">Hi, I&apos;m Jason!</Typography>
      <Stack
        useFlexGap
        rowGap={2}
        mt={3}
        alignItems={{ xs: "center", sm: "start" }}
      >
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
        <Stack
          mt={2}
          useFlexGap
          flexDirection="row"
          columnGap={2}
          justifyContent={{ xs: "center", sm: "start" }}
        >
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

export default Hero;
