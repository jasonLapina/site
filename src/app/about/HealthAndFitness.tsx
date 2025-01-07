import { Box, Paper, Stack, Typography } from "@mui/material";

export default function HealthAndFitness() {
  return (
    <Box>
      <Box sx={{ px: 2, py: 5, backgroundColor: "black", color: "white" }}>
        <Typography variant="h5">Health and Fitness</Typography>
        <Typography variant="body2" mt={2}>
          As someone who works from home and spends a lot of time at home, I
          make a conscious effort to stay healthy <br /> —both to sharpen my
          cognitive function and, of course, to maintain aesthetics.
        </Typography>
      </Box>
      <Stack sx={{ mt: 5 }} useFlexGap rowGap={4}>
        <Cooking />
        <Workout />
      </Stack>
    </Box>
  );
}

const Cooking = () => {
  return (
    <Paper
      sx={{
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        display: "grid",
        px: 2,
        py: 4,
      }}
    >
      <Box>
        <Typography variant="h5">I cook, a lot.</Typography>
        <Typography mt={2}>
          Not only is it cheaper, but it also helps me stay healthy and gives me
          a sense of accomplishment. I see it as another craft that I can
          consistently improve on and eventually master with time and practice.
          It&apos;s such a rewarding skill to have—not just for the joy of
          creating delicious meals, but also for the independence it brings.
          There&apos;re countless benefits to learning how to cook, from saving
          money to understanding the value of good nutrition. I&apos;m always
          looking for ways to refine my techniques and explore new flavors and
          recipes, pushing myself to get better every day.
        </Typography>
      </Box>
      <Box component="img" width="420px" src="/health/chef.svg" alt="chef" />
    </Paper>
  );
};

const Workout = () => {
  return (
    <Paper
      sx={{
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        display: "grid",
        px: 2,
        py: 4,
      }}
    >
      <Box
        component="img"
        width="420px"
        src="/health/gym.svg"
        alt="working out"
      />
      <Box>
        <Typography variant="h5">I work out, consistently.</Typography>
        <Typography mt={2}>
          Not only does it keep me in shape, but it also boosts my energy
          levels, improves my mental clarity, and gives me a sense of discipline
          that carries over to other aspects of my life. There&apos;re countless
          advantages to staying active, from enhancing overall health to
          managing stress, and I&apos;m always exploring new routines and
          techniques to challenge myself and keep progressing every day.
        </Typography>
      </Box>
    </Paper>
  );
};
