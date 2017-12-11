import React, { Component } from 'react';

let anotherState = 2;

class ShowState extends Component {
    constructor() {
        super();

        this.state = {
            answer: 42
        }
    }
    // getInitialState() {
    //     return {answer: 42};
    // }
    render() {
        return (
            <div>my state is {this.state.answer}</div>
        );
    }
}

class ShowStateApp extends Component {
    render() {
        return (
            <ShowState state={anotherState} />
        );
    }
}

export default ShowStateApp;