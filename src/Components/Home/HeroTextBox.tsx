import { Box, Link, Stack, Typography } from "@mui/material";
import HeroCTA from "@/Components/Home/HeroCTA";
import Specializations from "@/Components/Home/Specializations";

export default function HeroTextBox() {
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
      <HeroCTA />
      <Specializations />
    </Box>
  );
}
