import React from 'react'
import './Notes.css'

const notes = (props) => {
    return (
        <div className={"Notes"}>
            <h3>Record your activities</h3>
            <input className={"Input"} type={"text"} placeholder={"Enter your note"} onChange={props.name}/>
            <button onClick={props.click}>Save</button>
        </div>
    );
};

export default notes;
