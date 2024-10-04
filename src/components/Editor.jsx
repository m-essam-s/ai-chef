import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import propsTypes from "prop-types"
import "react-mde/lib/styles/css/react-mde-all.css";
const Editor = ({
    currentNote,
    updateNote
}) => {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote?.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}

Editor.propTypes = {
    currentNote: propsTypes.object.isRequired,
    updateNote: propsTypes.func.isRequired,
}

export default Editor