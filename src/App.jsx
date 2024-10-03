import {
    useState,
    useEffect
} from "react"

import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"
import "./App.css"

const App = () => {

    const [notes, setNotes] = useState(
        // Lazily initialize our `notes`
        () => JSON.parse(localStorage.getItem("notes")) || data)

    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    )

    useEffect(() => {
        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        ), []
    })

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        // Try to rearrange the most recently-modified note to be at the top
        setNotes(oldNotes => {
            const newNotes = []
            for (const note of oldNotes) {
                // if the id matches
                if (note.id === currentNoteId) {
                    // add the updated note to the new array
                    newNotes.unshift({ ...note, body: text })
                }
                else {
                    newNotes.push(note)
                }
            }
            return newNotes
        })
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                currentNote={findCurrentNote()}
                                updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}

export default App
