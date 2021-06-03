import React from "react"

export default class Counter extends React.Component{

//set the state class
state = {
number:0
}//end of state 

increment = () => {
    this.setState(
        {
            number: this.state.number + 1
        }
    )
}
render() {
    const style = {
        "width": "30px",
        "height": "30px",
        "border": "1px solid black"
    }
    return (
        <React.Fragment>
            <div style={style}>
    
            </div>
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
        </React.Fragment>

    )
}



}//end of counter 