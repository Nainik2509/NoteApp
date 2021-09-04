import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import NoteList from './NoteList'

const Favorites = () => {
    useFirestoreConnect([{
        collection: 'notes', where: ['favorite', '==', true],
        orderBy: ['createdAt', 'desc'], storeAs: 'favnotes'
    }])

    const favnotes = useSelector(state => state.firestore.ordered.favnotes)

    return (
        <div>
            <NoteList notes={favnotes} />
        </div>
    )
}

export default Favorites
