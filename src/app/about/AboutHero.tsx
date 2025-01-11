"use client";

import { Avatar, Box } from "@mui/material";
import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <Box
      component={motion.div}
      sx={{
        display: "inline-block",
        borderRadius: "50%",
        p: "4px",
        background:
          "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring" }}
    >
      <Avatar
        src={"/me-1.jpg"}
        sx={{
          height: "240px",
          width: "240px",
        }}
      >
        JL
      </Avatar>
    </Box>
  );
}
