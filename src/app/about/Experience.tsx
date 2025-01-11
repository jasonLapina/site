import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";

export default function Experience() {
  return (
    <Box>
      <Typography variant="h2" mt={10}>
        Journey & Work Ethic
      </Typography>
      <Typography variant="body2" mt={2}>
        My programming journey began with a leap of faith.
        <br /> It’s been challenging yet rewarding, and I wouldn’t hesitate to
        do it all over again!
      </Typography>

      <Box
        sx={{ px: 2, py: 5, backgroundColor: "black", color: "white", mt: 6 }}
      >
        <Typography variant="h5">My Work History</Typography>

        <Typography mt={2}>
          I&apos;ve had the opportunity to work with some amazing teams.
          <br /> I began my career at a company specializing in gamified web
          applications, which was an exciting and rewarding introduction to the
          industry.
          <br />
          Today, I contribute to a leading tech company, developing features and
          resolving issues for enterprise-level software designed for
          large-scale businesses
        </Typography>
      </Box>

      <Stack useFlexGap rowGap={3} mt={5}>
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
                  flexDirection={{ md: "row", xs: "column" }}
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
    </Box>
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
