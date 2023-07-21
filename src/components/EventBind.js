import React, { Component } from 'react'

class EventBind extends Component {

constructor(props){
        super(props)

        this.state = {
                message: 'hello'
        }
}

clickHandler(){
        this.setState({
                message: 'Goodbye!'
        })

        console.log(this)
}

  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}> Click ME!</button> */}
        <button onClick={() => this.clickHandler()}> Click ME!</button>
      </div>
    )
  }
}

export default EventBind