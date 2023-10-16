import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: true,
      text: "logout"
    };
  }

  handleClick() {
    this.setState({
      isloggedIn: !this.state.isloggedIn,
      text: this.state.text === "login" ? "logout" : "login"
    });
  }

  render() {
    // CONDITIONAL RENDERING
    // 1.USING IF ELSE

    if (this.state.isloggedIn) {
      return (
        <div>
          <p>Using if-else</p>
          <h1>Greetings from Himanshu @ Q3 Technologies.</h1>
          <button onClick={() => this.handleClick()}>{this.state.text}</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Using if-else</p>
          <h1>login required</h1>
          <button onClick={() => this.handleClick()}>{this.state.text}</button>
        </div>
      );
    }

    // 2.Using element variables

    // let message
    // if(this.state.isloggedIn){
    //   message="Greetings from Himanshu @ Q3 Technologies."
    // }
    // else{
    //   message="login required"
    // }

    // return(
    //   <div>
    //     <p>Using Element variables</p>
    //     <h1>{message}</h1>
    //     <button onClick={()=>this.handleClick()}>{this.state.text}</button>
    //   </div>
    // )

    // Ternary conditional operator

    // return this.state.isloggedIn ? (<div>
    //   <p>Using ternary operator</p>
    //   <h1>Greetings from Himanshu @ Q3 Technologies.</h1>
    //   <button onClick={()=>this.handleClick()}>{this.state.text}</button>
    // </div>) : (<div>
    //     <p>Using ternary operator</p>
    //     <h1>login required</h1>
    //     <button onClick={()=>this.handleClick()}>{this.state.text}</button>
    //     </div>)

    // using short circuit operator
    // return (
    //   this.state.isloggedIn && <div><h1>Rendered using short circuit operator</h1></div>
    // )
  }
}
