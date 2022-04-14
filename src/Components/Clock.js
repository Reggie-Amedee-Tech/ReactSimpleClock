import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    
    render() {
        return (
        <div>
        Current Time in NYC is {this.state.date.toLocaleTimeString()}
        
        </div>
        )
    }

    componentDidMount () {
        const time = 1000;
        setInterval(() => {
            this.setState({date: new Date()})
        }, time)
    }
    
    
}