"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  useMediaQuery,
} from "@mui/material";
import NextLink from "next/link";
import { LinkedIn } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navItems = [
  {
    text: "Portfolio",
    link: "/",
  },
  {
    text: "About Me",
    link: "/about",
  },
  {
    text: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "fixed",
        top: !isMobile ? "0" : "90%",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99,
        transition: "all .4s",
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent={!isMobile ? "space-between" : "center"}
        sx={{ px: 2 }}
        alignItems="center"
      >
        {!isMobile && (
          <Link component={NextLink} href="/">
            <Avatar
              src={"/logo.png"}
              sx={{
                width: "100px",
                height: "100px",
                transition: "all .3s",
                "&:hover": {
                  filter: "drop-shadow(0 0 2mm crimson)",
                },
                backgroundColor: "rgba(255,255,255,.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              JL
            </Avatar>
          </Link>
        )}

        <ActualNavBar />
      </Stack>
    </Container>
  );
};

const ActualNavBar = () => {
  const path = usePathname();
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      useFlexGap
      columnGap={2}
      sx={{
        px: 4,
        py: 2,
        borderRadius: "32px",
        backgroundColor: "rgba(255,255,255,.4)",
        backdropFilter: "blur(8px)",
        transition: "all .4s",
      }}
    >
      {navItems.map((nav) => {
        const isActive = path === nav.link;
        return (
          <Button
            key={nav.text}
            href={nav.link}
            component={NextLink}
            variant="text"
            sx={{
              textTransform: "initial",
              fontWeight: "bold",
              color: isActive ? "primary.dark" : "primary.light",
              scale: isActive ? 1.2 : 1,
              position: "relative",
            }}
          >
            {nav.text}
            <Box
              component={motion.div}
              sx={{
                position: "absolute",
                height: "2px",
                width: "90%",
                background: (theme) => theme.palette.primary.dark,
                transition: "all .3s",
                transform: !isActive ? "scaleX(0)" : "scaleX(1)",
                bottom: 6,
              }}
            />
          </Button>
        );
      })}
      <Button
        variant="text"
        sx={{
          textTransform: "initial",
          borderWidth: 3,
          fontWeight: "bold",
          color: "primary.light",
        }}
        endIcon={<LinkedIn />}
        href="https://www.linkedin.com/in/dev-jason/"
        target="_blank"
        rel="noreferrer noopener"
        component="a"
      >
        Connect
      </Button>
    </Stack>
  );
};

export default Navbar;