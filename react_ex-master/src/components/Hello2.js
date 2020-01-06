import React, {Component} from 'react'
import Hello2Sub from './Hello2Sub'

class Hello2 extends Component{
    
    constructor(){
        super()
        this.state = {count: 1}
    }

    handleClick = () => {
        console.log("CLICK")
        this.setState({count: ++ this.state.count  })
    }


    render() {
        return(
            <div className='box'>
            <Hello2Sub value= {this.state.count}></Hello2Sub>
            <button onClick= {this.handleClick} > + </button>
            <button > - </button>
            </div>
        )
    }

}
export default Hello2