import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import tododata from './main/tododata'
import Todo from './main/Todo';
import Jokes from './Jokes';
import jokesdata from './Jokesdata';
import product from './main/product'
import Meme from './main/meme'
import Stars from './main/starr'
import Brand from './main/Brand'
import Myform from './main/myform'
import Islogged from './lggedin'
import Conditional from './conditional'
import Messages from './message'
import Starwars from './main/starwars'
import Contactcard from './Contactcard';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom"


class Messi extends React.Component{

    constructor(){
        super()
        this.state = {answer : "yes", name: "Khalifa", age : 25, islogged : true}
    }

    render(){

        let mydisplay;
        if(this.state.islogged){
            mydisplay = "In"
        }
        else{
            mydisplay = "out"
        }
        return(
            <div><h1>Do you love coding ? {this.state.answer}</h1>
                <h1>My name is {this.state.name} and I am {this.state.age} years old</h1>
                <h3>you're currently logged {mydisplay}</h3>
            </div>
        )
    }
}

class MyApp extends React.Component {
    constructor(){
        super()
        this.state = {todo : tododata, brand : product, count : 1, isloading : true, people : []}

        this.Handleclick = this.Handleclick.bind(this)
        this.Handlechange = this.Handlechange.bind(this)
    }

    Handleclick(){
        this.setState(prevState =>{
            return{
                count : prevState.count + 1
            }
        })
    }

    componentDidMount(){
        fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                people: data.results
            }, () => console.log(this.state.people))

        })
    }

    Handlechange(id){

         this.setState(prevState =>{
            const updatedtodo = prevState.todo.map(toddo =>{
                if(toddo.id === id){
                    toddo.completed = !toddo.completed
                    
                }
                return toddo
            })
            return{
                todo : updatedtodo
            }
        })

    }

    render(){
        let myjokesdata = jokesdata.map(joke => <Jokes key={joke.id} question = {joke.question}
            punchline = {joke.punchline} />)
       
         let myproduct = this.state.brand.map(pro => <Brand key={pro.id} name = {pro.name} 
             description = {pro.description} />)

             let mall = this.state.people.map(pro => <Stars key={pro.id} eye_color={pro.eye_color} name = {pro.name} 
                gender = {pro.gender}  FavColor={pro.skin_color}  />)
       
          let mytodo = this.state.todo.map(item => <Todo key={item.id} item ={item}
             Handlechange={this.Handlechange} />)

           //  let myform = Myform
       
           const date = new Date();
           const hour = date.getHours();
           let timeofday;
       
           let styles = { backgroundColor : "yellow", fontSize: "30px"}
           
           if(hour < 12){
               timeofday = "morning";
               styles.color = "red";
           }
           else if(hour >=12 && hour < 17){
               timeofday = "afternoon";
               styles.color = "black";
           }
           else{
               timeofday = "night";
               styles.color = "brown";
               styles.backgroundColor = "white";
           }
           return(
               
            <div className="todolist" >
                
            <Meme/><br/><br/><br/>
            
            <h3>{this.state.count}</h3>
            <button onClick={this.Handleclick}>Change</button>
            <Conditional isloading={this.state.isloading}/>
            <Messages/>
            <table>
          <h2 style={{color: "white"}}>Starwars Cast</h2>
            </table>
            {mall}
               {myproduct}
                {mytodo}
                <Messi/>
                <Islogged/>
                <Starwars/>
               {myjokesdata}
               
               <Myform/>
                <Contactcard 
                name="Mr. Whitekerson" 
                imgUrl="http://placekitten.com/300/200"
                phone="5627262676"
                email="olahdhd@gmail.com"
                />
                 <Contactcard 
                name="Mr. Peterson" 
                imgUrl="http://placekitten.com/400/100"
                phone="5627262676"
                email="oljfkdhd@gmail.com"
                />
                 <Contactcard 
                name="Mr. Pekerson" 
                imgUrl="http://placekitten.com/400/200"
                phone="46477262676"
                email="olyedtddhd@gmail.com"
                />
                 <Contactcard 
                name="Mr. kerson" 
                imgUrl="http://placekitten.com/300/300"
                phone="562746472676"
                email="olahdhd@gmail.com"
                />
                <h3>It is currently {date.getHours() % 12} O'clock</h3>
                <h1 style={styles} >Good {timeofday}</h1>
               
            </div>
        )

    }

  

    
}

ReactDOM.render(<MyApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
