"use client";

import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaWebflow } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Specializations() {
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

  // Parent animation settings (staggerChildren is key for staggered animation)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each item's animation
      },
    },
  };

  // Child animation settings (for each icon)
  const childVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts offscreen
    visible: { opacity: 1, y: 0 }, // Slides into view
  };

  return (
    <Box mt={4}>
      <Typography variant="h5">Specializations:</Typography>
      {/* Apply parent animation */}
      <Stack
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        mt={2}
        useFlexGap
        flexDirection="row"
        columnGap={1}
        justifyContent={{ xs: "center", sm: "start" }}
      >
        {specializations.map((item) => {
          const Icon = item.icon;
          return (
            // Apply child animation
            <motion.div
              key={item.text}
              variants={childVariants} // Each child uses this for entry animation
              whileHover={{ scale: 1.2 }} // Scale on hover
            >
              <Box>
                <Tooltip arrow title={item.text}>
                  <Icon fontSize="40px" color={item.color} />
                </Tooltip>
              </Box>
            </motion.div>
          );
        })}
      </Stack>
    </Box>
  );
}