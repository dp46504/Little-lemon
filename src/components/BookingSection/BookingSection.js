import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./BookingSection.module.css";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormLabel from "@mui/joy/FormLabel";
import { Button } from "@mui/joy";

const BookingSection = () => {
  return (
    <>
      <SectionTitle sectionId="book-a-table-section" text="Book a table !" />
      <form className={s.bookingForm}>
        <div className={s.inputGroup}>
          <FormLabel
            sx={{ fontSize: "1.5rem", color: "#485E56", fontWeight: "bold" }}
            className={s.formLabel}
            htmlFor="res-date"
          >
            Choose date
          </FormLabel>
          <Input className={s.formInput} type="date" id="res-date" />
        </div>

        <div className={s.inputGroup}>
          <FormLabel
            sx={{ fontSize: "1.5rem", color: "#485E56", fontWeight: "bold" }}
            className={s.formLabel}
            htmlFor="res-time"
          >
            Choose time
          </FormLabel>
          <Select className={s.formInput} id="res-time">
            <Option value={17}>17:00</Option>
            <Option value={18}>18:00</Option>
            <Option value={19}>19:00</Option>
            <Option value={20}>20:00</Option>
            <Option value={21}>21:00</Option>
            <Option value={22}>22:00</Option>
          </Select>
        </div>
        <div className={s.horizontalInputGroup}>
          <div className={s.inputGroup}>
            <FormLabel
              sx={{ fontSize: "1.5rem", color: "#485E56", fontWeight: "bold" }}
              className={s.formLabel}
              htmlFor="guests"
            >
              Number of guests
            </FormLabel>
            <Input
              className={s.formInput}
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
          </div>
          <div className={s.inputGroup}>
            <FormLabel
              sx={{ fontSize: "1.5rem", color: "#485E56", fontWeight: "bold" }}
              className={s.formLabel}
              htmlFor="occasion"
            >
              Occasion
            </FormLabel>
            <Select className={s.formInput} id="occasion">
              <Option value="bithday">Birthday</Option>
              <Option value="anniversary">Anniversary</Option>
            </Select>
          </div>
        </div>

        <Button
          sx={{
            background: "#485E56",
            padding: "1.4rem",
            fontSize: "1.25rem",
            marginTop: "1.5rem",
            ":hover": { background: "rgb(35, 46, 42)" },
          }}
          className={`${s.formInput}`}
          type="submit"
        >
          Make Your reservation
        </Button>
      </form>
    </>
  );
};

export default BookingSection;
