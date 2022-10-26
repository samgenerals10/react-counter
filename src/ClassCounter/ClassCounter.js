import React, { Component } from 'react'
import "./Counter.css"

export default class ClassCounter extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
        this.handleIncrease=this.handleIncrease.bind(this)
    }
    handleIncrease(e){
        e.preventDefault()
        this.setState({count:this.state.count+2})
    }
    handleDecrease = (e)=>{
        e.preventDefault()
        this.setState({count: this.state.count -3})
    }
  render() {
    return (
      <div className='thisClass'>
        <h1>CounterClass: {this.state.count}</h1>
        <hr/>
        <br/>
        
        <button className="butN" onClick={this.handleIncrease}>Increase</button>&nbsp;&nbsp;
        <button className="butN1" onClick={this.handleDecrease}> Decrease</button>
      </div>
    )
  }
}
