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

  return (
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
            <motion.div
              key={item.text}
              animate={{ scale: [0, 1.5, 1] }}
              initial={{ scale: 0 }}
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
