"use client";
import { Avatar, Button, Container, Link, Stack } from "@mui/material";
import NextLink from "next/link";
import { LinkedIn } from "@mui/icons-material";
import { usePathname } from "next/navigation";

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
        <Link component={NextLink} href="/">
          <Avatar
            src={"/logo.png"}
            sx={{
              width: "100px",
              height: "100px",
              transition: "all .3s",
              " &:hover": {
                filter: "drop-shadow(0 0 2mm crimson)",
              },
            }}
          >
            JL
          </Avatar>
        </Link>

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
                variant="text"
                key={nav.text}
                href={nav.link}
                component={NextLink}
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
      </Stack>
    </Container>
  );
};

export default Navbar;
