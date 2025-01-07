import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ArrowOutward } from "@mui/icons-material";

const Games = () => {
  const games = [
    {
      title: "Dota 2",
      rating: 4.5,
      image: "dota.jpg",
      text: "With more than 4k hours (excluding the original Dota), this has been my favorite game for the longest period of time! The intense strategy and epic battles in Dota 2 make every match unforgettable.",
      release: "July 9, 2013",
      avatar: "avatar-dota.jpg",
      link: "",
    },
    {
      title: "Red Dead Redemption 2",
      rating: 4.5,
      image: "rdr2.webp",
      text: "The immersive world and rich storytelling make it an unforgettable experience. Exploring its vast, detailed landscapes feels like living in another era.",
      release: "October 26, 2018",
      avatar: "avatar-rdr2.jpg",
      link: "",
    },
    {
      title: "Valorant",
      rating: 5,
      image: "valo.webp",
      text: "Valorant is thrilling—intense gunplay and clutch moments make every match exciting. Its tactical gameplay and sharp design keep you coming back.",
      release: "June 2, 2020",
      avatar: "avatar-valo.png",
      link: "",
    },
    {
      title: "Elden Ring",
      rating: 5,
      image: "elden.webp",
      text: "Elden Ring is a masterpiece—its deep lore, vast world, and challenging gameplay make every moment feel rewarding. Exploring its landscapes is a true adventure.",
      release: "February 25, 2022",
      avatar: "avatar-elden.webp",
      link: "",
    },
  ];

  return (
    <Box>
      <Box sx={{ px: 2, py: 5, backgroundColor: "black", color: "white" }}>
        <Typography variant="h5">My Mount Rushmore of Games</Typography>
        <Typography variant="body2" mt={2}>
          I played plenty of online multiplayer games in high school, but over
          time, I’ve come to appreciate the pure joy of single-player games.
        </Typography>
      </Box>
      <Box
        display="grid"
        sx={{
          rowGap: 2,
          columnGap: 2,
          mt: 5,
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {games.map(({ title, rating, image, text, avatar, release }) => {
          return (
            <Card key={title}>
              <CardHeader
                avatar={<Avatar src={`/games/${avatar}`} />}
                title={<Typography variant={"h6"}>{title}</Typography>}
                subheader={<Typography variant={"body2"}>{release}</Typography>}
                action={<Rating precision={0.5} value={rating} />}
              />
              <CardMedia
                component="img"
                height="194"
                width="200"
                alt={title}
                image={`/games/${image}`}
              />
              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  href="/blog"
                  variant="text"
                  sx={{
                    fontWeight: "bold",
                  }}
                  endIcon={<ArrowOutward />}
                >
                  See Blog
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Games;
