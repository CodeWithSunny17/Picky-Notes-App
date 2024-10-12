import React from "react";
import { MdDelete } from "react-icons/md";
// import Fab from "@material-ui/core/Fab";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div onClick={handleClick}>
        <MdDelete />
      </div>
    </div>
  );
}

export default Note;
