"use client";

import { LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import { motion } from "motion/react";

export default function HeroCTA() {
  return (
    <Button
      component={motion.a}
      sx={{ mt: 5, position: "relative", overflow: "hidden" }}
      variant="contained"
      endIcon={<LinkedIn />}
      href="https://www.linkedin.com/in/dev-jason/"
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{ scale: 1.1 }}
    >
      Let&apos;s Connect
    </Button>
  );
}