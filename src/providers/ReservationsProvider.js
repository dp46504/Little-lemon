import React from "react";
import Alert from "@mui/material/Alert";

const initialState = {
  reservations: JSON.parse(localStorage.getItem("reservations")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RESERVATION":
      // Check if the reservation already exists
      const existingReservation = state.reservations.filter(
        (res) =>
          res.resDate === action.resDate && res.resTime === action.resTime
      );
      if (existingReservation.length > 0) {
        // show alert for 3 seconds by removing display property and after that 3 seconds return that property
        const alert = document.getElementById("alert-toast");
        alert.style.removeProperty("display");
        setTimeout(() => {
          alert.style.display = "none";
        }, 3000);
        return state; // Do not add the reservation if it already exists
      }
      // If it doesn't exist, add the new reservation
      const newreservation = {
        resDate: action.resDate,
        resTime: action.resTime,
        guests: action.guests,
        occasion: action.occasion,
      };

      localStorage.setItem(
        "reservations",
        JSON.stringify([...state.reservations, newreservation])
      );
      return {
        ...state,
        reservations: [...state.reservations, newreservation],
      };
    default:
      return state;
  }
};

export const ReservationsContext = React.createContext();

const ReservationsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const alertStyle = {
    position: "fixed",
    overflow: "hidden",
    top: window.innerWidth <= 768 ? "2%" : "",
    bottom: window.innerWidth > 768 ? "2%" : "",
    left: "50%",
    transform: "translateX(-50%)",
    width: window.innerWidth <= 768 ? "80%" : "30%",
    zIndex: "9999",
    display: "none",
  };

  return (
    <ReservationsContext.Provider value={{ state, dispatch }}>
      <Alert id="alert-toast" style={alertStyle} severity="error">
        <strong>Reservation exists!</strong>
        <br />A reservation for this date and time already exists. Please choose
        a different date or time.
      </Alert>
      {children}
    </ReservationsContext.Provider>
  );
};

export default ReservationsProvider;
