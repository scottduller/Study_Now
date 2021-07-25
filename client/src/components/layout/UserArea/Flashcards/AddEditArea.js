import React, { useContext } from "react";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const AddEditArea = ({ isActive, setIsActive }) => {
  const flashcardsContext = useContext(FlashcardsContext);
  const {
    current,
  } = flashcardsContext;

  return (
    <div
      className={`bg-dark addEditWrapper ${
        isActive ? "active" : ""
      } col-lg-5 m-auto`}
    >
      <div className="container pt-3 h-100 w-100">
        {current !== null && isActive ? (
          <EditForm setIsActive={setIsActive} />
        ) : isActive ? (
          <AddForm setIsActive={setIsActive} />
        ) : (
          <div className="d-flex flex-column defaultIcon">
            <i className="fas fa-pencil-ruler" />
            Add a new Flashcard or select a Flashcard to edit
          </div>
        )}
      </div>
    </div>
  );
};

export default AddEditArea;
