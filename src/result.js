import React from 'react';
import './style.css';

export default class Result extends React.Component {


    render() {
        let {result} = this.props;
        return (
            <div className = 'output'>
                <div className="result">
                <p>{result}</p>
            </div>
            </div>
            
    )
        ;
    }
}