import React from "react"

function Conditional(props){
    
    return(
        <div>
        {props.isloading ? <h3>loading</h3> : <h3>I am done loading</h3>}
        </div>
    )
    
    
    
}

export default Conditional