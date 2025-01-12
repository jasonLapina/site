import { Button, Container, Stack, Typography } from "@mui/material";
import BlogList from "@/app/blog/BlogList";

export default function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 20 }}>
      <Typography variant="h1">Blogs</Typography>
      <Typography variant="h6" mt={2}>
        Here, I share my thoughts on topics I have an unhealthy obsession for
      </Typography>

      <Stack useFlexGap columnGap={2} mt={8} flexDirection="row">
        {categs.map((c) => {
          return (
            <Button variant={"outlined"} key={c}>
              {c}
            </Button>
          );
        })}
      </Stack>
      <BlogList />
    </Container>
  );
}

const categs = ["All", "Gaming", "Design", "Development"];
