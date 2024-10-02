import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Location (props) {
    
    return (
        <div className = "main--location-row">
            <div className = "location--image">
                <img src = "{props.item.imageURL}" className="location--image"/>
            </div>
            <div className = "location--details">
                <div className = "location--map">
                    <FontAwesomeIcon icon = {faLocationDot} />
                    <p className = "location--name"></p>
                    <a className = "location--map-link" href="#">View on google Maps</a>
                </div>
                <h2 className = "location--title"></h2>
                <h3 className = "location--dates"></h3>
                <p className="location--description"></p>

            </div>
        </div>
    )
}

export default Location

