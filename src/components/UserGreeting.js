import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props){
        super(props)

        this.state = {
                isLoggedIn: true
        }
}

  render() {

        return this.state.isLoggedIn && <div> Welcome NUUUUUPPPPP</div> //jika true maka akan mengeksekui setelah &&, tapi jila false, maka tidak akan mengeksekusi apapun

        // return(
        //         this.state.isLoggedIn ?
        //         <div> Welcome Nofitaaaaaa</div> : 
        //         <div> Welcome Guestttt</div>
        // )

        // let message //menyimpan elemen ke dalam message (element variable approach)
        // if (this.state.isLoggedIn){
        //         message = <div> Welcome Nofitaaaaaa</div>
        // } else{
        //         message = <div> Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //         return <div> Welcome Nupnup! </div>
        // } else {
        //         return <div> Welcome Guest... </div>
        // }
//     return (
//       <div>
//         <div>Welcome Nupnup!</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
  }
}

export default UserGreeting