"use client";

import Box from "@mui/material/Box";
import { keyframes } from "@mui/system";

// Keyframes for rotating a circle
const rotateCircle = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// Keyframe for dots scaling in and out
const pulsate = keyframes`
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(0.6);
        opacity: 0.5;
    }
`;

// Loader Component
const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Rotating Circle */}
      <Box
        sx={{
          width: 80,
          height: 80,
          border: "2px solid pink",
          borderRadius: "50%",
          borderTopColor: "transparent",
          animation: `${rotateCircle} 1.5s linear infinite`,
          position: "relative",
        }}
      >
        {/* Pulsating Dots */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 12,
            height: 12,
            backgroundColor: "primary.main",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            animation: `${pulsate} 1s ease-in-out infinite`,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: 8,
            height: 8,
            backgroundColor: "primary.dark",
            borderRadius: "50%",
            animation: `${pulsate} 1s ease-in-out infinite`,
            animationDelay: "0.2s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: 8,
            height: 8,
            backgroundColor: "primary.light",
            borderRadius: "50%",
            animation: `${pulsate} 1s ease-in-out infinite`,
            animationDelay: "0.4s",
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading;
