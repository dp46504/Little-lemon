import React, { useContext } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./BookingSection.module.css";
// import Input from "@mui/joy/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { ReservationsContext } from "../../providers/ReservationsProvider";
import * as Yup from "yup";

const BookingSection = () => {
  const { state: reservationsState, dispatch: reservationsDispatch } =
    useContext(ReservationsContext);

  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: 17,
      guests: 1,
      occasion: "bithday",
    },
    onSubmit: (values) => {
      reservationsDispatch({
        type: "ADD_RESERVATION",
        resDate: values.resDate,
        resTime: values.resTime,
        guests: values.guests,
        occasion: values.occasion,
      });
    },
    // validationSchema: {
    //   resDate: Yup.string().required("Required"),
    //   resTime: Yup.number().required("Required"),
    //   guests: Yup.number()
    //     .min(1, "Must be at least 1")
    //     .max(10, "Must be at most 10")
    //     .required("Required"),
    //   occasion: Yup.string().required("Required"),
    // },
  });

  return (
    <>
      <SectionTitle sectionId="book-a-table-section" text="Book a table !" />
      <form className={s.bookingForm} onSubmit={formik.handleSubmit}>
        <div className={s.inputGroup}>
          <InputLabel
            sx={{ fontSize: "1.5rem", color: "#485E56", fontWeight: "bold" }}
            className={s.formLabel}
            htmlFor="res-date"
          >
            Choose date
          </InputLabel>
          <OutlinedInput
            {...formik.getFieldProps("resDate")}
            className={s.formInput}
            type="date"
            id="res-date"
          />
        </div>
        <div className={s.inputGroup}>
          <InputLabel
            sx={{ fontSize: "1.5rem", color: "#485E56", fontWeight: "bold" }}
            className={s.formLabel}
            htmlFor="res-time"
          >
            Choose time
          </InputLabel>

          <Select
            variant="outlined"
            className={s.formInput}
            id="res-time"
            {...formik.getFieldProps("resTime")}
          >
            <MenuItem value={17}>17:00</MenuItem>
            <MenuItem value={18}>18:00</MenuItem>
            <MenuItem value={19}>19:00</MenuItem>
            <MenuItem value={20}>20:00</MenuItem>
            <MenuItem value={21}>21:00</MenuItem>
            <MenuItem value={22}>22:00</MenuItem>
          </Select>
        </div>
        <div className={s.horizontalInputGroup}>
          <div className={s.inputGroup}>
            <InputLabel
              sx={{
                fontSize: "1.5rem",
                color: "#485E56",
                fontWeight: "bold",
              }}
              className={s.formLabel}
              htmlFor="guests"
            >
              Number of guests
            </InputLabel>
            <OutlinedInput
              {...formik.getFieldProps("guests")}
              className={s.formInput}
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
          </div>
          <div className={s.inputGroup}>
            <InputLabel
              sx={{
                fontSize: "1.5rem",
                color: "#485E56",
                fontWeight: "bold",
              }}
              className={s.formLabel}
              htmlFor="occasion"
            >
              Occasion
            </InputLabel>
            <Select
              variant="outlined"
              {...formik.getFieldProps("occasion")}
              className={s.formInput}
              id="occasion"
            >
              <MenuItem value="bithday">Birthday</MenuItem>
              <MenuItem value="anniversary">Anniversary</MenuItem>
            </Select>
          </div>
        </div>

        <Button
          sx={{
            background: "#485E56",
            padding: window.innerWidth > 768 ? "1.4rem" : "3rem",
            fontSize: "1.25rem",
            marginTop: window.innerWidth > 768 ? ".5rem" : "0",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "capitalize",
            borderRadius: "0.5rem",
            ":hover": { background: "rgb(35, 46, 42)" },
          }}
          aria-label="On Click"
          className={`${s.formInput} `}
          type="submit"
        >
          Make Your reservation
        </Button>
      </form>
    </>
  );
};

export default BookingSection;
