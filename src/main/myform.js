import React from "react"

class Myform extends React.Component{

    constructor(){
        super()
        this.state = {firstname : "", lastname : "", age : "" , gender : ""}
        this.loko = this.loko.bind(this)
    }

    loko(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
              [name] : value
          })
    }

    render(){
        return(
            <div className="high">
                <form onSubmit>
                    <label>
                        Firstname:
                    <input type="text" name="firstname" placeholder="firstname" onChange={this.loko} />
                    
                    </label>
                    <br/>
                    <label>
                        Lastname:
                    <input type="text" name="lastname" placeholder="lastname" onChange={this.loko} />
                    </label>
                    <br/>
                    <label>
                        Age:
                    <input type="text" name="age" placeholder="age" onChange={this.loko} />
                    </label>
                    <br/>
                    <label>
                        <input type="radio" value="male" name="gender" onChange={this.loko} />
                        Male
                    </label>
                    <br/>
                    <label>
                        <input type="radio" value="female" name="gender" onChange={this.loko} />
                        Female
                    </label>
                    <br/>
                    <button>Submit</button>
                </form>
                <br/><br/><br/>
                <h2>Entered Information:</h2>
                <h4>
                    Full name: {this.state.firstname} {this.state.lastname}<br/>
                    Age: {this.state.age} <br/>
                    Gender: {this.state.gender}
                </h4>
            </div>
        )
    }
}
export default Myform