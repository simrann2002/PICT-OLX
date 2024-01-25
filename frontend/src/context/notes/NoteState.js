import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [id, setId] = useState(0);

    return (
        <NoteContext.Provider value={{ id, setId }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;