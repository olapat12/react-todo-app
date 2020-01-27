import React from "react"

function Jokes(props){
    return(
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question} </h3>
            <h3 style={{color: !props.question && "white"}}>Answer: {props.punchline} </h3>
        </div>
    )
}

export default Jokes