import React from 'react'
import  './Activities.css'

const activities = ( props ) => {

    return (
        <div className="OuterBox">
            <div className="Activities">
                <button className="btn">{props.children}</button>
            </div>
        </div>
    );
};

export default activities;
