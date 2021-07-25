import React, { useEffect, useContext } from "react";
import CalendarArea from "../../layout/UserArea/Calendar/CalendarArea";
import TodoContext from "../../../context/todo/todoContext";

// Renders the calendar page
// TODO: The calendar shows no events when in phone mode

const Calendar = () => {
  const todoContext = useContext(TodoContext);
  const { getTodos } = todoContext;

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CalendarArea />
    </>
  );
};

export default Calendar;
