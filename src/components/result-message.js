import React, { Component } from 'react';

class ResultMessage extends Component {
  render() {
    return (
      <div {...this.props} className={this.props.classvalue}>
        <p>{this.props.message}</p>
      </div>
    );
  }  
}

export default ResultMessage;