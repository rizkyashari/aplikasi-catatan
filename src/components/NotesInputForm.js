import React from "react";
import { useState } from "react";
import NotesInput from "./NotesInput,";

const NotesInputForm = ({ updateNote }) => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const createNote = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();
    
        updateNote((notes) => [
            ...notes,
            { id: timestamp, createdAt: timestamp, title, body: note, archived: false},
        ])
    }

    return (
        <form className="notes-input__form" onSubmit={createNote}>
            <h2 className="notes-input__heading">Buat Catatan</h2>
            <small className="notes-input__small">
            Sisa karakter: <span className="notes-input__counter">{50 - title.length}</span>
            </small>
            <NotesInput
                value={title}
                onChange={setTitle}
                type='text'
                placeholder='Judul catatan...'
                id='title'
                name='title'
                required
            />
            <NotesInput
                value={note}
                onChange={setNote}
                type='textarea'
                placeholder='Tulis catatan kamu di sini...'
                id='note'
                name='note'
                required
            />
            <NotesInput type='submit' id='submit_form' name='submit_form' value='Create' />
        </form>
    )
}

export default NotesInputForm;