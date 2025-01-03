import { Avatar, Button, Container, Stack } from "@mui/material";

const navItems = [
  {
    text: "Nav",
    link: "",
  },
  {
    text: "About Me",
    link: "/about",
  },
  {
    text: "Anv",
    link: "",
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
        <Avatar>JL</Avatar>
        <Stack flexDirection="row" useFlexGap columnGap={2}>
          {navItems.map((nav) => (
            <Button key={nav.text} variant="contained">
              {nav.text}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
