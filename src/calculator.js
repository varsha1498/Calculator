import React from 'react';
import './style.css';

export default class Calculator extends React.Component{

    render(){
        return(
            
            <div className = 'calculator'>
                <div className = 'number-board'>
                    <div className = 'board-row-numbers'>
                        
                        <button name = '7' onClick = {e=> this.props.onClick(e.target.name)}>7</button>
                        <button id = '8' onClick = {e=> this.props.onClick(e.target.id)}>8</button>
                        <button id = '9' onClick = {e=> this.props.onClick(e.target.id)}>9</button>
                      

                    </div>

                    <div className = 'board-row-numbers'>
                        
                        <button id = '4' onClick = {e=> this.props.onClick(e.target.id)}>4</button>
                        <button id = '5' onClick = {e=> this.props.onClick(e.target.id)}>5</button>
                        <button id = '6' onClick = {e=> this.props.onClick(e.target.id)}>6</button>
                       

                    </div>

                    <div className = 'board-row-numbers'>
                        
                        <button id = '1' onClick = {e=> this.props.onClick(e.target.id)}>1</button>
                        <button id = '2' onClick = {e=> this.props.onClick(e.target.id)}>2</button>
                        <button id = '3' onClick = {e=> this.props.onClick(e.target.id)}>3</button>
                       

                    </div>

                    <div className = 'board-row-numbers'>
                        
                        <button name = '0' onClick = {e=> this.props.onClick(e.target.name)}>0</button>
                        <button name = '.' onClick = {e=> this.props.onClick(e.target.name)}>.</button>
                        <button name = '=' onClick = {e=> this.props.onClick(e.target.name)}>=</button>
                        

                    </div>
                    <div className = 'reset'>
                        <button name = 'reset' onClick = {e=> this.props.onClick(e.target.name)}>Clear</button>
                    </div>
                </div>
                <div className = 'Operators'>
                <button name = 'backspace' onClick = {e=> this.props.onClick(e.target.name)}>CE</button>
                <button name = '/' onClick = {e=> this.props.onClick(e.target.name)}>/</button>
                <button name = '*' onClick = {e=> this.props.onClick(e.target.name)}>X</button>
                <button name = '-' onClick = {e=> this.props.onClick(e.target.name)}>-</button>
                <button name = '+' onClick = {e=> this.props.onClick(e.target.name)}>+</button>
                </div>
            </div>
        );
    }
}