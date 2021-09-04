import React from 'react'
import Note from './Note'

const NoteList = ({ notes }) => {
    return (
        <div className="noteList">
            {notes && notes.length > 0 && notes.map(note => <Note note={note} key={note.id} />)}
        </div>
    )
}

export default NoteList
