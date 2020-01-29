import React from 'react'

function Stars(props){

    return(
        <div>
        
          <table className="man">
          <tr>
              
              <td style={{color: "white"}} rowSpan="2"> {props.name} </td>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
              <td style={{color: "white"}} rowSpan="1"> {props.eye_color}</td>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
              <td style={{color: "white"}} rowSpan="1"> {props.gender}</td>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
              <td style={{color: "white"}} rowSpan="1"> {props.skin_color}</td>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </tr>
            </table>
        </div>
    )
}

export default Stars