import { Avatar, Button, Container, Link, Stack } from "@mui/material";
import NextLink from "next/link";

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
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Stack flexDirection="row" justifyContent="space-between">
        <Link component={NextLink} href="/">
          <Avatar>JL</Avatar>
        </Link>

        <Stack flexDirection="row" useFlexGap columnGap={2}>
          {navItems.map((nav) => (
            <Button
              variant={"contained"}
              key={nav.text}
              href={nav.link}
              component={NextLink}
              sx={{ textTransform: "initial" }}
            >
              {nav.text}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
