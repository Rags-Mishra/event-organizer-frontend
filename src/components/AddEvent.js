import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EventContext from "../context/events/eventContext";
import { Grid, Button, Typography, Box, TextField, Link } from "@mui/material";

const AddEvent = () => {
  const eventContext = useContext(EventContext);
  const { addEvent } = eventContext;
  const [event, setEvent] = useState({
    event_name: "",
    location: "",
    is_liked: false,
    date: "",
    time: "",
    image: "",
  });

  const { event_name, location, is_liked, date, time, image } = event;
  const onChange = (e) =>
    setEvent({ ...event, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      event_name === "" ||
      location === "" ||
      date === "" ||
      image === "" ||
      time === ""
    ) {
      alert("Please fill in all fields");
    }
    console.log("event: ", event, is_liked);
    addEvent({
      event_name,
      location,
      date,
      image,
      is_liked,
      time,
    });
  };

  return (
    <Grid
      container
      sx={{
        marginTop: { md: "6%", xs: "20%" },
        height: "60vh",
        padding: "2%",
        display: "flex",
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Grid item md={6} sx={{ padding: "5%" }}>
        <Typography component="h1" variant="h3" sx={{ fontWeight: "bold" }}>
          AddEvent
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField //text field for event name
            margin="normal"
            required
            fullWidth
            id="event_name"
            value={event_name}
            onChange={onChange}
            label="Event Name"
            name="event_name"
            autoComplete="event_name"
            autoFocus
          />
          <TextField //text field for event location
            margin="normal"
            required
            fullWidth
            id="location"
            value={location}
            onChange={onChange}
            label="Location"
            name="location"
            autoComplete="location"
            autoFocus
          />
          <TextField //text field for event's date
            type="date"
            margin="normal"
            required
            fullWidth
            id="date"
            value={date}
            onChange={onChange}
            name="date"
            autoComplete="date"
            autoFocus
          />
          <TextField //text field for event's time
            type="time"
            margin="normal"
            required
            fullWidth
            id="time"
            value={time}
            onChange={onChange}
            name="time"
            autoComplete="time"
            autoFocus
          />
          <TextField //file field for event image
            type="file"
            margin="normal"
            required
            fullWidth
            id="image"
            value={image}
            onChange={onChange}
            label="Image"
            name="image"
            autoComplete="image"
            autoFocus
          />
          <Button
            onClick={onSubmit}
            fullWidth
            sx={{
              bgcolor: "#D1410C",
              "&.MuiButtonBase-root:hover": { bgcolor: "#ed7115" },
              marginTop: "5%",
            }}
          >
            <Typography sx={{ color: "white" }}>Done</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item md={6} sx={{ display: { md: "block", xs: "none" } }}>
        <img src={require("../login_image.jpg")} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};
export default AddEvent;
