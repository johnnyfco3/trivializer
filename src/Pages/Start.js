import React from "react"
import { Link } from "react-router-dom"

export function Start(){
    return(
        <div id="start">
            <h1>Trivializer</h1>
            <Link to="/questions"><button>Start Trivia</button></Link>
        </div>
    )
}

export default Start;