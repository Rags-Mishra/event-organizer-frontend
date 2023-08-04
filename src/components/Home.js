import React, { useEffect, useContext, useState } from "react";
import EventContext from "../context/events/eventContext";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Home = () => {
  const eventContext = useContext(EventContext);
  const { getEvents, events, updateLike } = eventContext;
  const [is_liked, setLike] = useState(false);
  const handleLike = (id) => {
    updateLike(id, { is_liked });
  };
  useEffect(() => {
    getEvents();
  }, [is_liked]);
  return (
    <Grid
      container
      sx={{
        marginTop: { md: "5%", xs: "20%" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Events</Typography>
      <Grid
        container
        sx={{ flexDirection: { md: "row", xs: "column" }, display: "flex" }}
      >
        {events &&
          events?.map((event) => (
            <Grid item md={4} xs={12}>
              <Card
                sx={{
                  margin: "4%",
                  backgroundColor: "#d3d3d3",
                }}
                key={event?.pk}
              >
                <CardMedia
                  component="img"
                  height="194"
                  src={require("../template_image.jpg")}
                />
                <Box>
                  <IconButton
                    sx={{
                      float: "right",
                      bottom: 20,
                      color: "white",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "",
                      backgroundColor: "white",
                    }}
                    onClick={() => (setLike(!is_liked), handleLike(event?.pk))}
                  >
                    {event?.is_liked ? (
                      <Favorite sx={{ fontSize: "20px", color: "#A3003B" }} />
                    ) : (
                      <FavoriteBorder
                        sx={{ fontSize: "20px", color: "black" }}
                      />
                    )}
                  </IconButton>
                </Box>

                <CardContent>
                  <Typography variant="h6" color="text">
                    {event?.event_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {event?.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {event?.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Time: {event?.time} PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Home;
