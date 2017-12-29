import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="inputfield">
        <input
          className="input"
          type="text"
          readOnly
          value={this.props.displayValue}
        />
      </div>
    );
  }
}

export default Input;
