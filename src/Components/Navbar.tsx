import { Avatar, Button, Container, Link, Stack } from "@mui/material";
import NextLink from "next/link";
import { LinkedIn } from "@mui/icons-material";

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
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ px: 2 }}
        alignItems="center"
      >
        <Link component={NextLink} href="/">
          <Avatar>JL</Avatar>
        </Link>

        <Stack flexDirection="row" useFlexGap columnGap={2}>
          {navItems.map((nav) => (
            <Button
              variant="outlined"
              key={nav.text}
              href={nav.link}
              component={NextLink}
              sx={{
                textTransform: "initial",
                backgroundColor: "white",
                borderWidth: 3,
              }}
            >
              {nav.text}
            </Button>
          ))}
          <Button
            variant="outlined"
            sx={{
              textTransform: "initial",
              backgroundColor: "white",
              borderWidth: 3,
            }}
            endIcon={<LinkedIn />}
          >
            Connect
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
