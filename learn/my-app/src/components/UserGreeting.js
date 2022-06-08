import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        // return this.state.isLoggedIn && <div>Welcome Aniket</div>
        // return this.state.isLoggedIn ? (

        //     <div>Welcome Aniket</div>) : (
        //     <div>Welcome Engineer</div>)
        //   let message
        //   if(this.state.isLoggedIn) {
        //     message = <div>Welcome Aniket</div>
        //   } else {
        //     message = <div>Welcome Engineer</div>
        //   }

        //   return <div> {message}
        //   </div>
        //   if (this.state.isLoggedIn) {
        //       return (
        //           <div>
        //               Welcome Aniket
        //           </div>
        //       )
        //   } else {
        //       return (
        //       <div> Welcome Engineer</div>
    }
    // return (
    //     <div>
    //         <div> Welcome Aniket</div>
    //             <div> Welcome, Engineer</div>
    //     </div>
    // )
}
// }

export default UserGreeting