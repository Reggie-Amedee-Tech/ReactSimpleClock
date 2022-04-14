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
        this.timerID = setInterval(() => {
            this.setState({date: new Date()})
        }, time)
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
    }
    
    
}