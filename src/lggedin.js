import React from "react"

class Islogged extends React.Component{

    constructor(){
        super()
        this.state = {log : false}
        this.loger = this.loger.bind(this)
    }

    loger(){
        this.setState(prevState=>{

            return{
                log : !prevState.log
            }
           
        })
    }

    render(){
        let mytext = this.state.log ? "Log Out" : "Log In"
        let status = this.state.log ? "You have successfully log in" : "You have successfully logged out"
        return(
            <div>
                
                {
                  <div>
                     <button onClick={this.loger}>{mytext}</button>
                     <h3>{status}</h3>
                   </div> 
                }
                
            </div>
        )
    }
}

export default Islogged