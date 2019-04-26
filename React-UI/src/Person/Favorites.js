import React from 'react'
import './Favorites.css'

const favorites = (props) => {
    return (
        <div className={"Favorites"}>
            <img src={props.picture} style={{width:'180px', height:'150px'}}/>
            <p>
                <b><u>{props.title}</u></b><br/>
                <h5><i>{props.children}</i></h5>
            </p>
        </div>
    );
};

export default favorites;
