import React from "react"

function Todo(props){
    let completedstyle = {
        textDecoration : "line-through",
        fontStyle : "italic",
        color : "white"
    }
    return(
        <div className="todolist" >
            <input type="checkbox" checked={props.item.completed}
             onChange={()=> props.Handlechange(props.item.id) } />
            <p style={props.item.completed ? completedstyle : null}>{props.item.text}</p>
        </div>
    )
}

export default Todo;