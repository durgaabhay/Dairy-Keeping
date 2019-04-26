import React from 'react'
import './Content.css'

const content = (props) => {
  return (
      <div className={"Content"}>
        <p>{props.children} <span/>
            <button className={"Close-Button"} onClick={props.click}>
                <span>×</span>
            </button>
        </p>

      </div>
  );
};

export default content;
