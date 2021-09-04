const initialState = {
    note_to_edit: {}
}

const noteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'EDIT_NOTE':
            return payload

        default:
            return state
    }
}

export default noteReducer