import { LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function HeroCTA() {
  return (
    <Button
      component="a"
      sx={{ mt: 5 }}
      variant="contained"
      endIcon={<LinkedIn />}
      href="https://www.linkedin.com/in/dev-jason/"
      target="_blank"
      rel="noreferrer noopener"
    >
      Let&apos;s Connect
    </Button>
  );
}
