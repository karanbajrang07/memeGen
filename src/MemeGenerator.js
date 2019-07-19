import React ,{Component} from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state= {
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemes:[]
        }
        this.handleChange=this.handleChange.bind(this)
         this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response =>  response.json())
        .then(response =>{
            const {memes}=response.data
          this.setState({
              allMemes:memes
          })  
        })
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
    event.preventDefault()
        const randNum=Math.floor(Math.random()*this.state.allMemes.length)
        const randMemeImg=this.state.allMemes[randNum].url
        console.log(randMemeImg)
        this.setState({
            randomImg:randMemeImg
        })
        
    }
    render(){
        return (
            <div>
            <form className="meme-form" onSubmit={this.handleSubmit}>
            <input name="topText" type="text" placeholder="Top text" value={this.state.topText} onChange={this.handleChange}/>
           <input  name="bottomText" type="text" placeholder="bottom text" value={this.state.bottomText} onChange={this.handleChange}/>
            <button> Gen </button>
             </form>
             <div className="meme">
             <img src={this.state.randomImg} alt=""      height="200" width="300"/>
             <h2 className="top">{this.state.topText}</h2>
             <h2 className="bottom">{this.state.bottomText}</h2>
             </div>
            </div>
        )
    }
    
    
} 

export default MemeGenerator