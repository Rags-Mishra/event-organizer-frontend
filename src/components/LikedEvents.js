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
const LikedEvents = () => {
  const eventContext = useContext(EventContext);
  const { getEvents, events, updateLike } = eventContext;
  const [is_liked, setLike] = useState(false);
  const handleLike = (id) => {
    console.log("liked: ", is_liked);
    updateLike(id, { is_liked });
  };
  useEffect(() => {
    getEvents();
  }, [is_liked]);
  console.log("events: ", events);
  return (
    <Grid
      container
      sx={{
        marginTop: { md: "5%", xs: "20%" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Liked Events</Typography>
      <Grid
        item
        md={12}
        sx={{ flexDirection: { md: "row", xs: "column" }, display: "flex" }}
      >
        {events &&
          events?.map((event) =>
            event?.is_liked === true ? (
              <Card
                sx={{
                  margin: "2%",
                  width: { md: "30%", xs: "100%" },
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
                  >
                    <Favorite sx={{ fontSize: "20px", color: "#A3003B" }} />
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
            ) : null
          )}
      </Grid>
    </Grid>
  );
};

export default LikedEvents;
