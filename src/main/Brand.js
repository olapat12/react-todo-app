import React from "react"

function Brand(props){

    return(
        <div>
            <h2 style={{color: "red"}} >Name : {props.name} </h2>
            <h4 style={{color: "white"}}>Description : {props.description} </h4>
        </div>
    )
}

export default Brand