import React from "react"

class Meme extends React.Component{
    constructor(){
        super()
        this.state = {toptext:"", 
        downtext: "" ,
         randomimg: "http://i.imgflip.com/1bij.jpg"
         , loading : false,
         photos : []
        }

        this.timeflies = this.timeflies.bind(this)
        this.handleform = this.handleform.bind(this)
    }

    componentDidMount(){
        this.setState({loading : true})
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} =  response.data
            this.setState({loading: false, photos : memes})
        })
    }

    timeflies(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleform(event){
        event.preventDefault()

        let randNum = Math.floor(Math.random() * this.state.photos.length)
        let randomim = this.state.photos[randNum].url
        this.setState({randomimg : randomim})
    }

    render(){
        return(
            <div>
                <img className="imm" src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="pause" />
                <h1 className="meme">Meme Generator</h1>
                <br/><br/>
                <form onSubmit={this.handleform}>
                    
                    <input type="text" name="toptext" placeholder="top text" className="yo"
                    onChange={this.timeflies} /> <span> </span> 
                    <input type="text" name="downtext" placeholder="bottom text" className="yo"
                     onChange={this.timeflies} /><br/><br/>
                    <img className="you" src={this.state.randomimg} />
                    <h3 className="pin">{this.state.toptext}</h3><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h3 className="pin">{this.state.downtext}</h3>
                    <button className="gen">Gen</button>
                </form>
                
            </div>
        )
    }
}

export default Meme