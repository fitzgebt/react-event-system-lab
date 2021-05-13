import React,  { Component } from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {

    handleOnFocus = (e) => {
        console.log('Good!')
    }

    handleOnBlur = (e) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button 
                onFocus={this.handleOnFocus}
                onBlur={this.handleOnBlur}
            />
        )
    }

}