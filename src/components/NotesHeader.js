import React from "react";
import NotesInput from "./NotesInput,";

const NotesHeader = ({ search, updateQuery }) => {
    return (
        <header className="container">
            <h1 className="notes-item__heading">Aplikasi Catatan</h1>
            <NotesInput
                value={search}
                onChange={updateQuery}
                type="search"
                id="notes-search"
                name="notes-search"
                placeholder="Temukan catatan..."
            />
        </header>
    )
};

export default NotesHeader;