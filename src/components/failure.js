import React, { Component } from 'react';

class Failure extends Component {
  render() {
    return (
      <div {...this.props}>
        <p>Failure! Data was not received</p>
      </div>
    );
  }  
}

export default Failure;