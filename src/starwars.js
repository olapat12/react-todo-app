import React from "react"

class Starwars extends React.Component{
    constructor(){
        super()
        this.state = {people : [],character : {}, loading : false, typee: "", gender : " ", favcolor : " ", 
                        firstname : "", lastname : "", isgood : false}

        this.mychange = this.mychange.bind(this)
        this.mychanges = this.mychanges.bind(this)
      
    }

    componentDidMount(){
        this.setState({loading : true})
        fetch("https://swapi.co/api/people/15")
        .then(response => response.json())
        .then(data =>{
            this.setState({
                loading : false,
                character : data},
                () => console.log(this.state.character))
        })

        fetch("https://swapi.co/api/people/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    people: data.results
                }, () => console.log(this.state.people))

            })

        
    }
   /* componentDidMount(){
        this.setState({loading : true})
        fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then(response => {
           // const {actors} =  response.data
            this.setState({loading: false, people : actors},
                () => console.log(this.state.people.results))
        })
    } */

    mychange(event){
        const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
            [name] : value
        })
        this.setState({typee : "typing"})
    }

    mychanges(event){
        const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
            [name] : value
        })
        this.setState({typee : " "})
    }
    

    render(){
        

        let myload = this.state.loading ? "loading" : null
        return(
            <div>
            {myload}
            <h3>{this.state.character.name}</h3>
            <h4>{this.state.character.eye_color}</h4>
           
            <form>
                <input type="text" name="firstname" placeholder="firstname" 
                onBlur={this.mychanges} onFocus={this.mychange}/>
                <input type="text" name="lastname" placeholder="lastname"
                 onBlur={this.mychanges} onChange={this.mychange}/> 
                 <br/>
                <label>
                
                    <input type="checkbox" name="isgood" checked={this.state.isgood} 
                    onChange={this.mychange} />
                    isgood
                </label>
                <br/>
                <label>
                    <input type="radio" name="gender" value="male"
                     checked={this.state.gender === "male"} 
                    onChange={this.mychange} />
                    male
                </label>
                <label>
                    
                    <input type="radio" name="gender" value="female" 
                    checked={this.state.gender=== "female"} 
                    onChange={this.mychange} />
                    female
                </label>
                <br/>
                favourite food 
                <select name="favcolor"
                        value={this.state.favcolor} 
                        onChange={this.mychange} >
                   <option value="">choose here</option> 
                   <option value="red">Red</option> 
                   <option value="green">Green</option> 
                   <option value="yellow">Yellow</option> 
                </select>
               <p className="why"> {this.state.typee} </p>
               <p className="lol">{this.state.firstname} {this.state.lastname}</p>
               <p>your favorite color is {this.state.favcolor}</p>
            </form>
            </div>
        )
            
        
    }
}

export default Starwars