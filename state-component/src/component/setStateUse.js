import React, { Component } from 'react'

export class SetStateUse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment(){
        this.setState(
            {
                count: this.state.count+1
            }
        )
    }
  render() {
    return (
      <div>
        <div>
            Count - {this.state.count}
        </div>
        <div>
            <button onClick={()=>this.increment()}>Increment</button>
        </div>
      </div>
    )
  }
}

export default SetStateUse