import { useState } from "react";
import ReactMde from "react-mde"
import Showdown from "showdown"
import propsTypes from "prop-types"
import "react-mde/lib/styles/css/react-mde-all.css";
const Editor = ({
    tempNoteText,
    setTempNoteText
}) => {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    return (
        <section className="pane editor">
            <ReactMde
                value={tempNoteText}
                onChange={setTempNoteText}
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
    tempNoteText: propsTypes.object.isRequired,
    setTempNoteText: propsTypes.func.isRequired,
}

export default Editor