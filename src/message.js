import React from "react"

class Messages extends React.Component{

    constructor(){
        super()
        this.state = {unreadmsg :["ab","bc", "dg"]}
    }

    render(){
        return(
            <div>
            {
                this.state.unreadmsg.length > 0 &&
                <h1>You have {this.state.unreadmsg.length} unread message </h1>
            }
                
            </div>
        )
    }

}

export default Messages