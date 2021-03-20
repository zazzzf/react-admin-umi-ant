import React, { Component } from 'react';

class test extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
    }
    updateValue = (e) => {
        this.setState({
            data: e.target.value
        })
    }
    clearInput=()=>{
        this.setState({data:''})
    }
    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.updateValue} defaultValue={'11111'}></input>
                <button onClick={this.clearInput}>clear</button>
            </div>
        );
    }
}

export default test;
