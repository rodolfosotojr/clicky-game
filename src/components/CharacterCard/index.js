import React from "react"
import "./style.css"

//component for my characters props
function CharacterCard (props){
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}   

export default CharacterCard;