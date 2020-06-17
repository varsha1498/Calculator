import React from 'react';
import './App.css';
import './style.css';
import Calculator from './calculator.js';
import Result from './result.js';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state  = {
      result: ""
    }
  }

  //handles key pressed
  onClick = button => {

    if(button === '='){
        this.calculate()
    }

    else if(button === 'backspace'){
        this.backspace()
    }

    else if(button === 'reset'){
      this.reset()
  }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};
  //to calculate when pressed "="
  calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};


//function for backspace
backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};

reset = () =>{
  this.setState({
    result: ""
  })
};


render(){
  return(
    <div className = 'App'>
      <h1>CALCULATOR</h1>
      <div className= 'calc-body'>
      <Result result={this.state.result}/>
      <Calculator onClick = {this.onClick}/>
      </div>
     
    </div>
  );
}

}


