import React, { Component } from 'react';

class EachButton extends Component {
  handleClick = event => {
    let buttonValue = event.target.value;
    if (event.target.value === '÷') {
      buttonValue = '/';
    }
    if (event.target.value === '×') {
      buttonValue = '*';
    }
    if (this.props.isnumber === true) {
      this.props.inputNumber(buttonValue);
    }
    if (this.props.isoperator === true) {
      this.props.inputOperator(buttonValue);
    }
    if (this.props.isfunction === true) {
      this.props.inputFunction(buttonValue);
    }
  };
  render() {
    return (
      <button
        className="button"
        id={`value-${this.props.id}`}
        onClick={this.handleClick}
        value={this.props.eachButton}
      >
        {this.props.eachButton}
      </button>
    );
  }
}

export default EachButton;
