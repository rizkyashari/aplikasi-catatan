import { showFormattedDate } from "../utils/data";
import NotesButton from './NotesButton';

const NotesItemBody = ({ id, title, createdAt, body, archived, action }) => {
    const onDelete = (item) => action((notes) => notes.filter((note) => note.id !== item));
    const onArchive = (item) => {
        action((notes) =>
        notes.map((note) => {
            if (note.id === item) {
                return { ...note, archived: !note.archived };
            }
            return note;
        }));
    }

    return (
        <article id={id} className="notes-item__body">
            <header className="notes-item__body-header">
                <h3 className="notes-item__body-title">{title}</h3>
                <small className="notes-item__body-date">{showFormattedDate(createdAt)}</small>
                <p className="notes-item__body-note">{body}</p>
            </header>
            <footer className="notes-item__body-footer">
                <NotesButton eventHandler={() => onDelete(id)} label="delete"/>
                <NotesButton eventHandler={() => onArchive(id)} label={archived ? "unarchived" : "archived"}/>
            </footer>
        </article>
    )
}

export default NotesItemBody;