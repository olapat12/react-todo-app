import React from "react"

function Contactcard(props){

    return(
        <div className="contact-card" >
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>phone: {props.phone} </p>
            <p>email: {props.email}</p>
           
        </div>
    )
}



export default Contactcard