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
      title: "Elden Ring",
      rating: 5,
      image: "elden.webp",
      text: "My favorite game of all time! The massive lore and world of Elden Ring is a fascinating place to explore.",
      release: "February 25, 2022",
      avatar: "avatar-elden.webp",
      link: "",
    },
    {
      title: "Red Dead Redemption 2",
      rating: 4.5,
      image: "rdr2.webp",
      text: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.",
      release: "October 26, 2018",
      avatar: "avatar-rdr2.jpg",
      link: "",
    },
    {
      title: "Valorant",
      rating: 5,
      image: "valo.webp",
      text: "Valorant is a 2020 first-person tactical hero shooter video game developed and published by Riot Games.",
      release: "June 2, 2020",
      avatar: "avatar-valo.png",
      link: "",
    },

    {
      title: "Dota 2",
      rating: 4,
      image: "dota.jpg",
      text: "Following nearly two years of beta testing, Dota 2 was released on Steam for Windows on July 9, 2013.",
      release: "July 9, 2013",
      avatar: "avatar-dota.jpg",
      link: "",
    },
  ];

  return (
    <Box>
      <Typography variant="h5">My Mount Rushmore of Games</Typography>

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
