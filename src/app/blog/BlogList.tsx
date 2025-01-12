import { Box, Card, CardContent } from "@mui/material";

export default function BlogList() {
  const dummyBlogs = Array.from({ length: 6 });
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3,1fr)"
      columnGap={2}
      rowGap={4}
      mt={8}
    >
      {dummyBlogs.map((_, index) => {
        return (
          <Card key={index}>
            <CardContent>bloggity blog blog</CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
