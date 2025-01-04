import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";

const workHistory = [
  {
    position: "Junior Frontend Developer",
    company: "Taktyl Studios",
    date: "2022 - 2023",
    description: "I work on the UI of the game Sims 4",
  },
  {
    position: "Web Developer",
    company: "Blink Creative Studio",
    date: "2023 - 2024",
    description: "I work on the UI of the game Sims 4",
  },
  {
    position: "Web Developer",
    company: "Freelance",
    date: "2023 - Present",
    description: "I work on the UI of the game Sims 4",
  },
  {
    position: "UI Developer",
    company: "Lemongrass Cloud",
    date: "2024 - Present",
    description: "I work on the UI of the game Sims 4",
  },
];

export default function Experience() {
  return (
    <Paper sx={{ px: 4, py: 8 }}>
      <Typography variant="h2">My History</Typography>

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
                <Typography>{description}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </Paper>
  );
}
