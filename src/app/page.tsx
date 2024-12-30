import Hero from "@/Components/Home/Hero";
import Portfolio from "@/Components/Home/Portfolio";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack useFlexGap rowGap={15}>
      <Hero />
      <Portfolio />
    </Stack>
  );
}
