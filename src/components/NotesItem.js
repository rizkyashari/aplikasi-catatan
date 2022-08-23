import React from "react";
import NotesItemBody from "./NotesItemBody";

const NotesItem = ({ label, notes, setNotes }) => {
    return (
        <section>
            <h2 className="notes-item__heading">{label}</h2>
            {notes.length === 0 ? (
                <p className="notes-item__empty-note">Tidak ada catatan.</p>
            ) : (
                <div className="notes-item__list">
                    {notes?.map((note) => (
                        <NotesItemBody key={note.id} action={setNotes} {...note}/>
                    ))}    
                </div>
            )}
        </section>
    )
};

export default NotesItem;