import React, { useState, useContext } from "react";
import FlashcardsContext from "../../../../context/flashcards/flashcardsContext";

const AddForm = ({ setIsActive }) => {
  const flashcardsContext = useContext(FlashcardsContext);
  const {
    addFlashcard,
    clearCurrentFlashcard,
  } = flashcardsContext;

  const [form, setForm] = useState({
    title: "",
    front: "",
    back: "",
  });

  const { title, front, back } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addFlashcard(form);
    setIsActive(false);
  };

  const onClose = () => {
    setIsActive(false);
    clearCurrentFlashcard();
  };

  return (
    <form className="text-white" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-11 p-0 flashcardUnselectable">
          <h3>Add Card</h3>
        </div>
        <div className="col-1 p-0">
          <i
            className="fas fa-times text-secondary float-right fa-2x"
            style={{ lineHeight: "55px" }}
            onClick={onClose}
          />
        </div>
      </div>

      <hr className="bg-secondary" />
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          value={title}
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          placeholder="Front of the Flashcard"
          id="front"
          rows="10"
          value={front}
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          placeholder="Back of the Flashcard"
          id="back"
          rows="10"
          value={back}
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-block btn-success mt-4">
        <i className="fas fa-check" />
      </button>
    </form>
  );
};

export default AddForm;
