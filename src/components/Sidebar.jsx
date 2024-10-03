import propsTypes from 'prop-types'

const Sidebar = (props) => {
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div

                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{
                    note.body.split("\n")[0]
                }</h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

Sidebar.propTypes = {
    notes: propsTypes.array.isRequired,
    currentNote: propsTypes.object.isRequired,
    setCurrentNoteId: propsTypes.func.isRequired,
    newNote: propsTypes.func.isRequired,
}

export default Sidebar