import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Main (props) {    
    return (
        <div className = "main--location-row">
            <div className = "location--image-container">
                <img src = {props.item.imageUrl} className="location--image"/>
            </div>
            <div className = "location--details">
                <div className = "location--map">
                    <span className="mapIcon"><FontAwesomeIcon icon = {faLocationDot} /></span>
                    <p className = "location--location">{props.item.location}</p>
                    <a className = "location--map-link" href = {props.item.googleMapsUrl} target = "_blank">View on Google Maps</a>
                </div>
                <h2 className = "location--name">{props.item.title}</h2>
                <div className="location--dates-container">
                    <h3 className = "location--dates">{props.item.startDate}</h3>
                        <span className="spacer">-</span>
                    <h3 className = "location--dates">{props.item.endDate}</h3> 
                </div>
                <p className="location--description">{props.item.description}</p>

            </div>
        </div>
    )
}

export default Main;