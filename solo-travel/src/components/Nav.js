import React from "react";  

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

function Navbar (){
    return (
        <nav>
            <div className = "nav--background">
                <FontAwesomeIcon icon = {faGlobeAmericas} /> <p>my travel journal</p>
            </div>
        </nav>
    )
}

export default Navbar