import { Box, Paper, Stack, Typography } from "@mui/material";
import Games from "@/app/about/Games";

export default function Others() {
  return (
    <Paper sx={{ px: 4, py: 8 }}>
      <Stack useFlexGap rowGap={6}>
        <Box>
          <Typography variant="h2">Beyond the Code</Typography>
          <Stack useFlexGap rowGap={2} mt={2}>
            <Typography>
              When I&apos;m not building new things or learning new things to
              build new things (😆), I&apos;m mostly gaming, working-out, or
              cooking! 👨‍🍳
            </Typography>
          </Stack>
        </Box>
        <Games />
      </Stack>
    </Paper>
  );
}
