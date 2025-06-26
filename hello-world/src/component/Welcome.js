import React, {Component} from "react";

//Class Components

class Welcome extends Component {
    render(){
        return <h1>Welcome, {this.props.name} using Class Components</h1>
    }
}

export default Welcome