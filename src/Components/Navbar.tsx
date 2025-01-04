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
        top: "1rem",
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
          <Avatar>JL</Avatar>
        </Link>

        <Stack flexDirection="row" alignItems="center" useFlexGap columnGap={2}>
          {navItems.map((nav) => {
            const isActive = path === nav.link;
            return (
              <Button
                variant="outlined"
                key={nav.text}
                href={nav.link}
                component={NextLink}
                sx={{
                  textTransform: "initial",
                  borderWidth: 3,
                  backgroundColor: isActive ? "primary.light" : "white",
                  color: !isActive ? "primary.light" : "white",
                }}
              >
                {nav.text}
              </Button>
            );
          })}
          <Button
            variant="outlined"
            sx={{
              textTransform: "initial",
              backgroundColor: "white",
              borderWidth: 3,
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
