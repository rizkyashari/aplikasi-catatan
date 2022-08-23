import React from "react";

const NotesButton = ({ label, eventHandler }) => {
    return (
        <button className="notes-button" type="button" onClick={eventHandler} data-action={label} >
        {label}
        </button>
    );
}

export default NotesButton;