import { Box, Stack, Typography } from "@mui/material";
import Games from "@/app/about/Games";
import HealthAndFitness from "@/app/about/HealthAndFitness";

export default function Others() {
  return (
    <>
      <Stack useFlexGap rowGap={6}>
        <Box>
          <Typography variant="h2">Beyond the Code</Typography>
          <Stack useFlexGap rowGap={2} mt={2}>
            <Typography variant="body2">
              When I&apos;m not building new things or learning new things to
              build new things (😆), <br /> I&apos;m mostly gaming, working-out,
              cooking or doom-scrolling on social media. Checkout a few of my
              interests below!
            </Typography>
          </Stack>
        </Box>
        <Games />
        <HealthAndFitness />
      </Stack>
    </>
  );
}
