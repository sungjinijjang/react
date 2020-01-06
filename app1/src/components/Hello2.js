import React, {Component} from 'react'

class Hello2 extends Component {

    constructor(){
        super()
        // instance variable
        this.state = {count: 1}
    }

    handleClick = () => {
        console.log("하나두울세엣")
        this.setState({count: ++ this.state.count})
    }

    handleClick2 = () => {
        this.setState({count: -- this.state.count})
    }

    //Method
    render(){
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}> + </button>
                <button onClick={this.handleClick2}> - </button>
            </div>
        )
    }

}


export default Hello2