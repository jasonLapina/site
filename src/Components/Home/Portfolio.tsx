import { Box, Container, Paper, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h1">Portfolio</Typography>
        <Typography variant="h4" mt={4}>
          Take a look at some of my work!
        </Typography>
        <Typography mt={2} maxWidth="400px">
          Explore experiences crafted with precision and passion, aimed at
          delivering seamless experiences that are always fun and effective.
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        mt={6}
        columnGap={3}
        rowGap={6}
      >
        {projects.map((proj) => {
          return (
            <Paper
              component="a"
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              key={proj.heading}
              sx={{
                textDecoration: "none",
                transition: "all .3s",
                "&:hover": { filter: "drop-shadow(0 0 16px pink)" },
              }}
            >
              <Box sx={{ height: "270px", overflow: "hidden", mb: 3 }}>
                <Box
                  component="img"
                  src={`/projects/${proj.image}.png`}
                  sx={{
                    minHeight: "270px",
                    width: "100%",
                    mb: 1,
                    transition: "all .3s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Box>

              <Box px={2} py={3}>
                <Typography variant="body2">{proj.subHeading}</Typography>
                <Typography fontWeight="bold" variant="h4">
                  {proj.heading}
                </Typography>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Container>
  );
};

export default Portfolio;

const projects = [
  {
    heading: "Leaderbored",
    subHeading: "UI portal for HTML5 games",
    image: "leaderbored1",
    link: "https://leaderbored.gg/",
  },
  {
    heading: "AYO 2023",
    subHeading: "Event information and registration",
    image: "ayo",
    link: "https://www.sikapphilippines.org/ayo2023",
  },
  {
    heading: "Taktyl Studios",
    subHeading: "Company website",
    image: "Taktyl",
    link: "https://taktylstudios.com/",
  },
  {
    heading: "JFC Universe",
    subHeading: "A 3D web app that tells a story",
    image: "jfc",
    link: "https://milestones-worlds.jollibeegroup.com/",
  },
  {
    heading: "Blink Creative Studio",
    subHeading: "Company website ",
    image: "blink",
    link: "https://www.blinkcreativestudio.com/",
  },
  {
    heading: "LapsFlix",
    subHeading: "Personal project to help find a new movie/series",
    image: "lapsflix1",
    link: "https://lapsflix-v3.vercel.app/",
  },
  {
    heading: "3D Tee-Hee",
    subHeading: "Personal project to practice 3D web development",
    image: "3dingdong1",
    link: "https://3ding-dong.vercel.app/",
  },
  {
    heading: "Jason Lapina-v1",
    subHeading: "First version of my website",
    link: "https://jasondev-nine.vercel.app/",
    image: "site-v1",
  },
];
