import React, {Component} from 'react'
import CountBoard from './CountBoard'

class CountComponent extends Component {

    constructor(props){
        super(props)
        this.state = {count: 1}
    }

    changeCount = (amount) => {
        console.log(this)
        this.setState({count: this.state.count + amount})
    }

    render(){
        return(
            <>
            <CountBoard num={this.state.count}></CountBoard>
            <CountBoard label= "1" wrapper={this.changeCount} amount={1}></CountBoard>
            <CountBoard label= "-1" wrapper={this.changeCount} amount={-1}></CountBoard>
            <CountBoard label= "10" wrapper={this.changeCount} amount={10}></CountBoard>
            <CountBoard label= "-10" wrapper={this.changeCount} amount={-10}></CountBoard>
            <CountBoard label= "100" wrapper={this.changeCount} amount={100}></CountBoard>
            <CountBoard label= "-100" wrapper={this.changeCount} amount={-100}></CountBoard>
            </>
        )
    }
}

export default CountComponent