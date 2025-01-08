"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import NextLink from "next/link";
import {
  Close as CloseIcon,
  LinkedIn,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const path = usePathname();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99,
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ px: 2 }}
        alignItems="center"
      >
        {/* Logo Section */}
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

        {/* Navigation */}
        {isMobile ? (
          <>
            {/* Mobile drawer button */}
            <IconButton
              onClick={() => toggleDrawer(true)}
              sx={{ color: "primary.light" }}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
                role="presentation"
              >
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography variant="h6">Navigation</Typography>
                  <IconButton onClick={() => toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>

                {/* Drawer Nav Items */}
                {navItems.map((nav) => {
                  const isActive = path === nav.link;
                  return (
                    <Button
                      key={nav.text}
                      onClick={() => toggleDrawer(false)}
                      href={nav.link}
                      component={NextLink}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontWeight: "bold",
                        color: isActive ? "primary.dark" : "primary.light",
                      }}
                    >
                      {nav.text}
                    </Button>
                  );
                })}

                <Button
                  onClick={() => toggleDrawer(false)}
                  href="https://www.linkedin.com/in/dev-jason/"
                  target="_blank"
                  rel="noreferrer noopener"
                  component="a"
                  sx={{
                    justifyContent: "flex-start",
                    mt: 2,
                    textTransform: "none",
                    borderWidth: 3,
                    fontWeight: "bold",
                    color: "primary.light",
                  }}
                  endIcon={<LinkedIn />}
                >
                  Connect
                </Button>
              </Box>
            </Drawer>
          </>
        ) : (
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
                  }}
                >
                  {nav.text}
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
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;