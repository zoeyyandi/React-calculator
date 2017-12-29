import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer.js';
import Input from './Input.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
        operations: ['÷', '×', '-', '+', '='],
        functions: ['AC', '+/-', '%']
      },
      displayValue: '0',
      firstNumber: '0',
      secondNumber: null,
      firstOperator: null,
      isResult: false
    };
  }

  inputNumber = number => {
    const { firstNumber, secondNumber, firstOperator, isResult } = this.state;
    const newNumber = String(number);

    if (firstOperator) {
      this.setState({
        displayValue:
          secondNumber === null ? newNumber : secondNumber + newNumber,
        secondNumber:
          secondNumber === null ? newNumber : secondNumber + newNumber
      });
    } else {
      this.setState({
        buttons: {
          ...this.state.buttons,
          functions: ['C', '+/-', '%']
        },
        displayValue:
          firstNumber === '0' || isResult ? newNumber : firstNumber + newNumber,
        firstNumber:
          firstNumber === '0' || isResult ? newNumber : firstNumber + newNumber,
        isResult: false
      });
    }

    // if (firstNumber === '0') {
    //   const newState = {
    //     firstNumber: newNumber,
    //     displayValue: newNumber,
    //     buttons: {
    //       ...this.state.buttons,
    //       functions: ['C', '+/-', '%']
    //     }
    //   };
    //   this.setState(newState);
    // }
    // if (firstNumber !== '0') {
    //   let newFirstNumber = firstNumber + number;
    //   let newSecondNumber = secondNumber + number;
    //   if (firstOperator !== null) {
    //     this.setState({
    //       secondNumber: newNumber,
    //       displayValue: newNumber
    //     });
    //   } else if (firstOperator !== null && secondNumber !== null) {
    //     const newState = {
    //       secondNumber: newSecondNumber,
    //       displayValue: newSecondNumber
    //     };
    //     this.setState(newState);
    //   } else {
    //     const newState = {
    //       firstNumber: newFirstNumber,
    //       displayValue: newFirstNumber
    //     };
    //     this.setState(newState);
    //   }
    // }
  };

  inputOperator = operator => {
    const { firstOperator, firstNumber, secondNumber } = this.state;

    if (secondNumber) {
      const result = String(
        eval(firstNumber.concat(firstOperator, secondNumber))
      );
      this.setState({
        displayValue: result,
        firstNumber: result,
        secondNumber: null,
        firstOperator: operator === '=' ? null : operator,
        isResult: true
      });
    } else {
      this.setState({
        firstOperator: operator === '=' ? null : operator
      });
    }

    // if (firstOperator === null) {
    //   this.setState({
    //     firstOperator: operator
    //   });
    // }
    // if (firstOperator !== null) {
    //   if (secondNumber !== null) {
    //     const string = firstNumber.concat(firstOperator).concat(secondNumber);
    //     const newDisplayValue = String(eval(string));
    //     if (operator === '=') {
    //       const newState = {
    //         displayValue: newDisplayValue,
    //         firstNumber: newDisplayValue,
    //         firstOperator: null,
    //         secondNumber: null
    //       };
    //       this.setState(newState);
    //     } else {
    //       const newState = {
    //         displayValue: newDisplayValue,
    //         firstNumber: newDisplayValue,
    //         firstOperator: operator,
    //         secondNumber: null
    //       };
    //       this.setState(newState);
    //     }
    //   }
    //   if (secondNumber === null) {
    //     this.setState({
    //       firstOperator: operator
    //     });
    //   }
    // }
  };

  inputFunction = functionButton => {
    const {
      displayValue,
      firstNumber,
      secondNumber,
      firstOperator
    } = this.state;
    if (functionButton === 'AC') {
      const newState = {
        firstNumber: '0',
        secondNumber: null,
        firstOperator: null,
        displayValue: '0'
      };
      this.setState(newState);
    }
    if (functionButton === 'C') {
      if (firstOperator) {
        this.setState({
          displayValue: '0',
          secondNumber: null,
          buttons: {
            ...this.state.buttons,
            functions: ['AC', '+/-', '%']
          }
        });
      } else {
        this.setState({
          displayValue: '0',
          firstNumber: '0',
          buttons: {
            ...this.state.buttons,
            functions: ['AC', '+/-', '%']
          }
        });
      }
    }
    if (functionButton === '+/-') {
      if (firstOperator) {
        this.setState({
          secondNumber:
            secondNumber && secondNumber !== '0'
              ? String(Number(secondNumber) * -1)
              : secondNumber === '0' ? '0' : String(Number(firstNumber) * -1),
          displayValue:
            secondNumber && secondNumber !== '0'
              ? String(Number(secondNumber) * -1)
              : secondNumber === '0' ? '0' : String(Number(firstNumber) * -1)
        });
      } else {
        this.setState({
          firstNumber:
            firstNumber === '0' ? '0' : String(Number(firstNumber) * -1),
          displayValue:
            firstNumber === '0' ? '0' : String(Number(firstNumber) * -1)
        });
      }
    }

    if (functionButton === '%') {
      if (firstOperator) {
        console.log('im here');
        this.setState({
          displayValue:
            secondNumber && secondNumber !== '0'
              ? String(Number(secondNumber) / 100)
              : secondNumber === '0'
                ? '0'
                : String(Number(firstNumber) * Number(firstNumber) / 100),
          secondNumber:
            secondNumber && secondNumber !== '0'
              ? String(Number(secondNumber) / 100)
              : secondNumber === '0'
                ? '0'
                : String(Number(firstNumber) * Number(firstNumber) / 100)
        });
      } else {
        const result = String(Number(firstNumber) / 100);
        const index = result.indexOf(firstNumber);
        console.log('res, index', result, index, firstNumber);
        this.setState({
          displayValue: firstNumber === '0' ? '0' : result.slice(0, index + 1),
          firstNumber: firstNumber === '0' ? '0' : result.slice(0, index + 1)
        });
      }
    }

    //   if (secondNumber !== null) {
    //     const newState = {
    //       buttons: {
    //         ...this.state.buttons,
    //         functions: ['AC', '+/-', '%']
    //       },
    //       secondNumber: null,
    //       displayValue: '0'
    //     };
    //     this.setState(newState);
    //   } else {
    //     const newState = {
    //       buttons: {
    //         numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
    //         operations: ['÷', '×', '-', '+', '='],
    //         functions: ['AC', '+/-', '%']
    //       },
    //       firstNumber: '0',
    //       displayValue: '0'
    //     };
    //     this.setState(newState);
    //   }
    // }
    // if (functionButton === '+/-') {
    //   if (secondNumber !== null) {
    //     this.setState({
    //       displayValue: String(Number(displayValue) * -1),
    //       secondNumber: String(Number(displayValue) * -1)
    //     });
    //   } else {
    //     this.setState({
    //       displayValue: String(Number(displayValue) * -1),
    //       firstNumber: String(Number(displayValue) * -1)
    //     });
    //   }
    // }
    // if (functionButton === '%') {
    //   if (secondNumber !== null) {
    //     this.setState({
    //       displayValue: String(Number(displayValue) / 100),
    //       secondNumber: String(Number(displayValue) / 100)
    //     });
    //   } else {
    //     this.setState({
    //       displayValue: String(Number(displayValue) / 100),
    //       firstNumber: String(Number(displayValue) / 100)
    //     });
    //   }
    // }
  };

  render() {
    console.log(
      this.state.firstNumber,
      this.state.firstOperator,
      this.state.secondNumber
    );
    return (
      <div className="App">
        <Input displayValue={this.state.displayValue} />
        <ButtonContainer
          buttons={this.state.buttons}
          inputNumber={this.inputNumber}
          inputOperator={this.inputOperator}
          inputFunction={this.inputFunction}
          allClear={this.state.allClear}
        />
      </div>
    );
  }
}

export default App;
