import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import eventReducer from "./eventReducer";
import { ADD_EVENT, GET_EVENTS, EVENT_ERROR, UPDATE_LIKE } from "../types";
let url = "http://localhost:8000";
console.log(url);
const EventState = (props) => {
  const initialState = {
    events: null,
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(eventReducer, initialState);

  // fetches all the events from database
  const getEvents = async () => {
    try {
      const res = await axios.get(`${url}/api/getEvents/`);
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    } catch (err) {
      return err;
    }
  };

  // adds event to the database
  const addEvent = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`${url}/api/addEvent/`, formData, config);
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EVENT_ERROR,
        payload: error.message,
      });
    }
  };

  // updates like status in database for the particular event
  const updateLike = async (id, formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `${url}/api/updateEvent/${id}`,
        formData,
        config
      );
      dispatch({
        type: UPDATE_LIKE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EVENT_ERROR,
        payload: error.message,
      });
    }
  };
  return (
    <EventContext.Provider
      value={{
        events: state.events,
        loading: state.loading,
        error: state.error,
        addEvent,
        updateLike,
        getEvents,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
export default EventState;
