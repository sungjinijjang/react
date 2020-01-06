import React,  {Component} from 'react'


class ExInput extends Component {

    constructor() {
        super()
        this.input = React.createRef()
    }

    handleClick = () => {
        console.log('click')
        console.log(this.input.current.value)
        this.input.current.value = 'ZZZ'
    }

    render() {
        return(
            <div>
                <input type='text' ref={this.input} ></input>
                <button onClick={this.handleClick}>CLICK</button>
            </div>
        )
    }
}

export default ExInput