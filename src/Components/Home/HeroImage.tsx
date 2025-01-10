"use client";

import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { motion } from "motion/react";

const HeroImage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  if (matches) return <></>;

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "20px",
        p: 2,
      }}
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring" }}
    >
      <Stack alignItems="center" height="100%">
        <Box
          sx={{
            borderRadius: "20px",
            width: { md: "100%", xs: "200px" },
            height: "370px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image src="/Laps_artwork1.jpg" alt={"Jason Lapina"} fill={true} />
        </Box>
        <Stack sx={{ textAlign: "center", mt: 3 }} useFlexGap rowGap={1}>
          <Typography variant="h5"> Jason Lapina </Typography>
          <Typography variant="h6"> Web Developer </Typography>
          <Typography variant="caption" color="textSecondary">
            &quot;I do what I do for the love of it&quot;
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HeroImage;
