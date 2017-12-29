import React, { Component } from 'react';
import EachButton from './EachButton.js';

class ButtonContainer extends Component {
  render() {
    return (
      <div className="buttonContainer">
        <div className="leftButtons">
          {this.props.buttons.functions.map((value, index) => (
            <EachButton
              key={index}
              eachButton={value}
              id={index}
              isfunction={true}
              allClear={this.props.allClear}
              buttons={this.props.buttons.functions}
              inputFunction={this.props.inputFunction}
            />
          ))}
          {this.props.buttons.numbers.map((value, index) => (
            <EachButton
              key={index}
              eachButton={value}
              id={'1' + index}
              isnumber={true}
              buttons={this.props.buttons.numbers}
              inputNumber={this.props.inputNumber}
            />
          ))}
        </div>
        <div className="rightButtons">
          {this.props.buttons.operations.map((value, index) => (
            <EachButton
              key={index}
              eachButton={value}
              id={'2' + index}
              isoperator={true}
              buttons={this.props.buttons.operations}
              inputOperator={this.props.inputOperator}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ButtonContainer;
