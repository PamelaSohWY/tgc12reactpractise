import React from 'react'

export default class NumberBox extends React.Component{

    state = {
        count: this.props.initialValue
    }

    render() {
        return (
            <div style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px"
            }}>{this.state.count}</div> //remember not to hard code this
        )
    }
}

//the state variable is a JS object. We can refer to any properties in the state using this.state

