import React, {Component} from 'react'
import '../../App.css'
import '../HeroSection';

export default class Contact extends Component{
  state = {
    count: 0,
  };
  //Increment
  handleIncrement=()=>{
    this.setState({
      count: ++this.state.count,
    });
  }
  //Decrement
  handleDecrement=()=>{
    if(this.state.count>0){
      this.setState({
        count: --this.state.count,
      });
    }
    else{
      this.setState({
        count: 0,
    });
  }
  };
  //Reset
  handleReset=()=>{
    this.setState({
      count: 0,
   });
  };
  render(){
    return(
      <div className='contact'>
        <div className='state'>
          {this.state.count}
          </div>
          <div className='counter'>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}
  
