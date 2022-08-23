import { useState, useEffect } from "react";
import NotesInputForm from "./NotesInputForm";
import NotesHeader from "./NotesHeader";
import NotesItemBody from "./NotesItemBody";
import { getInitialData } from "../utils/data";


function NotesApp() {
  const [query, setQuery] = useState("");
  const [searchNote, setSearchNote] = useState([]);
  const [notes, setNote] = useState(getInitialData());

  const activeNote = (searchNote || notes).filter((note) => !note.archived);
  const archivedNote = (searchNote || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNote(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <NotesHeader search={query} updateQuery={setQuery} updateNote={setNote} />
      <main className="notes-app__main">
        <NotesInputForm updateNote={setNote} />
        <NotesItemBody label='Catatan Aktif' notes={activeNote} setNote={setNote} />
        <NotesItemBody label='Arsip' notes={archivedNote} setNote={setNote} />
      </main>
    </>
  );
}

export default NotesApp;