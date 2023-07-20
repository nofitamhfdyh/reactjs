import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
        super(props)
        
        this.state = {
             count : 0
          }
}


increment(){
        this.setState({
                count : this.state.count + 1
        }, 
        () => {console.log('Callback Value', this.state.count) // output di console akan memulai dari 1
        })
        console.log(this.state.count) //output di console akan memulai dari 0
}

render() {
    return (
        <div>
                <div>
                Count - {this.state.count}
                </div>
        <button onClick={() => this.increment()}>Increment</button>
        </div>
        )
  }
}

export default Counter