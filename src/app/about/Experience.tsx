import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";

export default function Experience() {
  return (
    <Paper sx={{ px: 4, py: 8 }}>
      <Typography variant="h2">My Work History</Typography>

      <Stack useFlexGap rowGap={2} mt={5}>
        <Typography>I&apos;ve been on some cool teams!</Typography>
        <Typography>
          I’m an experience designer, but I’m sure you know that by now! I’ve
          been working as a designer for over 4 years at tons of places now and
          have touched so many products and teams.
        </Typography>
        <Typography>
          My 20+ year passion for games bled into my career and I’ve been happy
          to help create amazing experiences for a bunch of different clients
          over the years.
        </Typography>
      </Stack>

      <Stack mt={5} useFlexGap rowGap={3}>
        {workHistory.map((work) => {
          const { company, date, description, position } = work;

          return (
            <Accordion
              key={company}
              sx={{
                px: 2,
                py: 4,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreRounded />}>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Stack
                    flexDirection="row"
                    useFlexGap
                    columnGap={1}
                    alignItems="center"
                  >
                    <Typography variant="h5">{company}</Typography>
                    <Typography variant="overline">| {position}</Typography>
                  </Stack>
                  <Typography variant="subtitle2">{date}</Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{description}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </Paper>
  );
}

const workHistory = [
  {
    position: "Junior Frontend Developer",
    company: "Taktyl Studios",
    date: "2022 - 2023",
    description:
      "My first developer job was with a company led by the president of the Game Developers Association of the Philippines (GDAP). I primarily worked on gamified web applications, including a marketplace for 3D assets. My most significant contribution was coding the entire UI for their portal to HTML5 games.",
  },
  {
    position: "Web Developer",
    company: "Freelance",
    date: "2023 - Present",
    description:
      "Developed a website for a small-scale home business, enabling users to browse and order trendy shoes seamlessly.",
  },
  {
    position: "Web Developer",
    company: "Blink Creative Studio",
    date: "2023 - 2024",
    description:
      "Led the technical development of the business as the sole developer, managing end-to-end solutions. I handled UI design, built a content management system, and managed AWS deployments. My most notable achievement was developing a 3D web app for Jollibee Foods Corporation (JFC), showcasing their 40-year journey in celebration of their 40th anniversary.",
  },
  {
    position: "UI Developer",
    company: "Lemongrass Cloud",
    date: "2024 - Present",
    description:
      "Currently working as a UI Developer at Lemongrass Cloud, a company specializing in SAP cloud services for enterprise-level businesses. In this role, I have resolved numerous bugs, implemented new features, and contributed to enhancing the application’s functionality. It's a highly technical position where we leverage cutting-edge approaches like Micro-Frontend Architectures (MFEs) to deliver scalable and modern solutions.",
  },
];
