import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div class="">
        <h2>Welcome {this.props.name}</h2>
      </div>
    );
  }
}
export default Welcome;
