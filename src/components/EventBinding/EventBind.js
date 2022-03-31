import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler() {
    this.setState({
      message: "Good Bye",
    });
    console.log("eventHandler()");
  }
  render() {
    return (
      <div>
        {this.state.message}
        {/*<button onClick={this.eventHandler.bind(this)}>click</button> */}
        {/*  <button onClick={() => this.eventHandler()}>click</button>*/}
        <button onClick={this.eventHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
